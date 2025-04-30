import { useEffect, useState } from "react"
import BtnLink from "../components/BtnLink";
import { BASE_API_URL } from "../server/serves";

function SickLeavesRecord2(){
    const [sickLeavesWaiting, setSickLeavesWaiting] = useState([]);
    const [sickLeavesWaiting2, setSickLeavesWaiting2] = useState([]);

    useEffect(()=>{
        fetch(`${BASE_API_URL}/api/SickLeave/GetAllWaitingCertifiedSickLeaves`)
        .then((res)=> res.json())
        .then((data)=> setSickLeavesWaiting2(data))
    }, [])

    useEffect(()=>{
        fetch(`${BASE_API_URL}/api/SickLeave/GetAllWaitingSickLeaves`)
        .then((res)=> res.json())
        .then((data)=> setSickLeavesWaiting(data))
    }, [])

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">تحديث الاجازات المرضية</h2>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                        <tr>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>المرجع</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الاسم</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ الاخطار</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>العنوان</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع التحديث</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تحديث</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sickLeavesWaiting.map((leave, index) => {
                                return(
                                    <tr key={index}>
                                        <th>#{leave.id}</th>
                                        <th>{leave.userName}</th>
                                        <th>{new Date(leave.requestDate).toLocaleDateString()}</th>
                                        <th>{leave.governorate} - {leave.state} - {leave.street}</th>
                                        {/* <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                        <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                        <th> {leave.days} أيام</th> */}
                                        <th>التحديث الأول</th>
                                        <th>
                                            <BtnLink id={leave.id} name='تفاصيل الاخطار' link='/sick-leave-request' class="btn btn-outline-primary" />
                                        </th>
                                        <th>
                                            <BtnLink id={leave.id} name='تحديث الاخطار' link='/update-sick-leave' class="btn btn-outline-success" />
                                        </th>
                                    </tr>
                                )})
                            }
                            {sickLeavesWaiting2.map((leave, index) => {
                                return(
                                    <tr key={index}>
                                        <th>#{leave.id}</th>
                                        <th>{leave.userName}</th>
                                        <th>{new Date(leave.requestDate).toLocaleDateString()}</th>
                                        <th>{leave.governorate} - {leave.state} - {leave.street}</th>
                                        {/* <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                        <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                        <th> {leave.days} أيام</th> */}
                                        <th>التحديث الثاني</th>
                                        <th>
                                            <BtnLink id={leave.id} name='تفاصيل الاخطار' link='/sick-leave-request' class="btn btn-outline-primary" />
                                        </th>
                                        <th>
                                            <BtnLink id={leave.id} name='تحديث الاخطار' link='/update-sick-leave2' class="btn btn-outline-success" />
                                        </th>
                                    </tr>
                                )})
                            }
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan={7} className="text-center text-danger p-3">لا يوجد اخطارات مرضية حتى الآن</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SickLeavesRecord2