import { useEffect, useState } from "react";
import '../CSS/LeaveBalance.css';
import { BASE_API_URL, token, useUserData } from "../server/serves";

const toArabicNumbers = (num) => {
    if (num === undefined || num === null) return "--";
    return num.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
};

function LeaveBalance(){
    const [leaveTypes, setLeaveTypes] = useState([]);
    const userData = useUserData();

    useEffect(() => {
    fetch(`${BASE_API_URL}/api/NormalLeave/GetLeaveTypes`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    })
    .then((res) => res.json())
    .then((data) => setLeaveTypes(data))
    .catch((err) => console.error("Error fetching leave types:", err)); // معالجة الأخطاء
}, []);


    return(
        <>
            {userData.roleName !== "عميد الكلية" ?
                <div>
                <div className="mt-4">
                    <h4 className="text-bold">اجازاتي</h4>
                </div>
                <div className="d-flex gap-3 row mt-3">

                    {leaveTypes.map((leaveType, index)=>{
                        return(
                            <div className="box LeaveBalance col-sm-12 col-md rounded-3 p-3" key={index}>
                                {leaveType === "اعتيادية" ?
                                    <div>
                                        {/* <div>
                                            {user.leaveSection === 0 ? <h3>{user.normalLeavesCount} / {"0"}</h3>
                                            : user.leaveSection === 1 ? <h3>{user.normalLeavesCount} / {"15"}</h3>
                                            : user.leaveSection === 2 ? <h3>{user.normalLeavesCount} / {"36"}</h3>
                                            : user.leaveSection === 3 ? <h3>{user.normalLeavesCount} / {"45"}</h3>
                                            : <h3>{user.normalLeavesCount} / {"60"}</h3>}
                                        </div> */}

                                        <div>
                                            <h4 className="text-bold">{leaveType}</h4>
                                        </div>
                                        <div>
                                            <h5>باقِ ({toArabicNumbers(userData.normalLeavesCount)})</h5>
                                        </div>
                                    </div>
                                :leaveType === "عارضة" ?
                                    <div>
                                        {/* <div>
                                            {user.leaveSection === 0 ? <h3>{user.casualLeavesCount} / {"4"}</h3>
                                            : user.leaveSection === 1 ? <h3>{user.casualLeavesCount} / {"3"}</h3>
                                            : <h3>{user.casualLeavesCount} / {"7"}</h3>}
                                        </div> */}

                                        <div>
                                            <h4 className="text-bold">{leaveType}</h4>
                                        </div>
                                        <div>
                                            <h5>باقِ ({toArabicNumbers(userData.casualLeavesCount)})</h5>
                                        </div>
                                    </div>
                                :leaveType === "مرضية" ?
                                    <div>
                                        {/* <div>
                                            <h3>{user.nonChronicSickLeavesCount}</h3>
                                        </div> */}
                                        <div>
                                            <h4 className="text-bold">{leaveType}</h4>
                                        </div>
                                        <div>
                                            <h5>معتمد ({toArabicNumbers(userData.nonChronicSickLeavesCount)})</h5>
                                        </div>
                                    </div>
                                :null
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
                : null
            }
        </>
    )
}

export default LeaveBalance;