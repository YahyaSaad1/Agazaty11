import { useParams } from 'react-router-dom';
import '../CSS/LeaveRequests.css';
import { useEffect, useState } from 'react';
import BtnLink from '../components/BtnLink';
import Btn from '../components/Btn';
import { BASE_API_URL, token } from '../server/serves';

function UserSickLeaveRequest() {
    const LeaveID = Number(useParams().leaveID);
    const [leave, setLeave] = useState(null);
    const [user, setUser] = useState(null);
    const [respononseDoneForMedicalCommitte, setRespononseDoneForMedicalCommitte] = useState(null);

    useEffect(() => {
        const fetchSickLeaveById = async () => {
            try {
                // الحصول على بيانات الإجازة
                const response = await fetch(`${BASE_API_URL}/api/SickLeave/GetSickLeaveById/${LeaveID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                setLeave(data);
                setRespononseDoneForMedicalCommitte(data.respononseDoneForMedicalCommitte);

                // الحصول على بيانات المستخدم فقط إذا كانت موجودة
                if (data && data.userID) {
                    const userResponse = await fetch(`${BASE_API_URL}/api/Account/GetUserById/${data.userID}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    const userData = await userResponse.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchSickLeaveById();
    }, [LeaveID, token]);

    return (
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">{`الاجازة رقم #${LeaveID}`}</h2>
                </div>
                <div className="p-3">
                    <BtnLink name='سجل الاجازات المرضية' link='/agazaty/sick' class="btn btn-primary m-0 ms-2 mb-2" />
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                    <table className="m-0 table table-striped box2">
                        <thead>
                            <tr>
                                <th scope="col" className="pb-3" style={{ backgroundColor: '#F5F9FF' }}>حالة الطلب</th>
                                <th scope="col" className="text-start" style={{ backgroundColor: '#F5F9FF' }}>
                                    {leave?.certified === true
                                        ? <Btn name="مقبولة" class="btn-success"/>
                                        : (leave?.responseDoneFinal === false && leave?.respononseDoneForMedicalCommitte === false)
                                            ? <th className="text-primary">معلقة عند التحديث الأول</th>
                                            : (leave?.responseDoneFinal === false && leave?.respononseDoneForMedicalCommitte === true)
                                                ? <Btn name="معلقة عند التحديث الثاني" class="btn-primary"/>
                                                : <Btn name="مرفوضة" class="btn-danger"/>
                                                
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">الاسم</th>
                                <th scope="col" className="text-start">{leave?.userName || "جاري التحميل..."}</th>
                            </tr>
                            <tr>
                                <th scope="col">نوع الاجازة</th>
                                <th scope="col" className="text-start">مرضية</th>
                            </tr>
                            <tr>
                                <th scope="col">ملاحظات المرض</th>
                                <th scope="col" className="text-start">{leave?.disease || "جاري التحميل..."}</th>
                            </tr>
                            <tr>
                                <th scope="col">رقم الهاتف</th>
                                <th scope="col" className="text-start">{user?.phoneNumber || "جاري التحميل..."}</th>
                            </tr>
                            <tr>
                                <th scope="col">القسم</th>
                                <th scope="col" className="text-start">{user?.departmentName || "جاري التحميل..."}</th>
                            </tr>

                            {leave?.certified && (
                                <>
                                    <tr>
                                        <th scope="col">تاريخ بداية الاجازة</th>
                                        <th scope="col" className="text-start">{new Date(leave?.startDate).toLocaleDateString() || "---"}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">تاريخ نهاية الاجازة</th>
                                        <th scope="col" className="text-start">{new Date(leave?.endDate).toLocaleDateString() || "---"}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">عدد أيام الاجازات</th>
                                        <th scope="col" className="text-start">{leave?.days || "--"}</th>
                                    </tr>
                                </>
                            )}
                            <tr>
                                <th scope="col">المرجع</th>
                                <th scope="col" className="text-start">#{leave?.id || "جاري التحميل..."}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserSickLeaveRequest;
