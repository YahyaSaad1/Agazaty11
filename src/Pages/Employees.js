import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import BtnLink from "../components/BtnLink";
import {faIdCard, faTable, faUserPen, faUserSlash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_API_URL, downloadActiveUsersExcel, roleName } from "../server/serves";

function Employees() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchEmployees();
    }, []);




    const fetchEmployees = () => {
        fetch(`${BASE_API_URL}/api/Account/GetAllActiveUsers`)
            .then((res) => res.json())
            .then((data) => {setUsers(Array.isArray(data) ? data : []);
            })
            .catch(error => {setUsers([]);}
        );
    };
    const softDeleteUser = (userId) => {
        Swal.fire({
            title: "هل أنت متأكد؟",
            text: "سيتم أرشفة الموظف ولن يكون مرئيًا في القائمة!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "نعم، أرشفة!",
            cancelButtonText: "إلغاء"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://agazatyapi.runasp.net/api/Account/SoftDeleteUser/${userId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" }
                })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`خطأ في الحذف: ${text || response.status}`);
                        });
                    }
                    return response.json();
                })
                .then(() => {
                    Swal.fire("تم الأرشفة!", "تم أرشفة الموظف بنجاح.", "success");
                    fetchEmployees();
                })
                .catch(error => {
                    console.error("Error soft deleting user:", error);
                    Swal.fire("خطأ!", `حدث خطأ أثناء أرشفة الموظف: ${error.message}`, "error");
                });
            }
        });
    };





    return (
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">الموظفيين</h2>
                </div>

                { roleName === "مدير الموارد البشرية" && 
                <div className="d-flex">
                    <button onClick={downloadActiveUsersExcel} className="m-3 btn btn-success d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faTable} style={{ fontSize: "1.4rem" }} color="#fff" className="ms-2" />
                        <span>تنزيل بيانات الموظفين النشطين</span>
                    </button>

                    <BtnLink name='إضافة موظف' link='/add-employee' class="m-3 btn btn-primary m-0"/>
                </div>

                }
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>الاسم</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>المسمى الوظيفي</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>القسم</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>تاريخ التعيين</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>رقم الهاتف</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>المزيد</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td style={{ height: '50px' }}>{user.fullName}</td>
                                        <td style={{ height: '50px' }}>{user.roleName}</td>
                                        <td style={{ height: '50px' }}>{user.departmentName}</td>
                                        <td style={{ height: '50px' }}>{new Date(user.hireDate).toLocaleDateString()}</td>
                                        <td style={{ height: '50px' }}>{user.phoneNumber}</td>
                                        <td style={{ height: '50px' }}>
                                            <Link to={`/profile/user/${user.id}`} className="ms-1">
                                                <FontAwesomeIcon icon={faIdCard} color="green" className="fontt" />
                                            </Link>
                                            <Link to={`/employee/${user.id}`} className="ms-1">
                                                <FontAwesomeIcon icon={faUserPen} color="blue" className="fontt" />
                                            </Link>
                                            <FontAwesomeIcon 
                                                icon={faUserSlash} 
                                                onClick={() => softDeleteUser(user.id)}
                                                color="red" 
                                                className="fontt" 
                                                style={{ cursor: "pointer", marginLeft: "10px" }} 
                                            />
                                        </td>
                                    </tr>  
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-danger p-3">لا يوجد موظفين نشطين</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employees;