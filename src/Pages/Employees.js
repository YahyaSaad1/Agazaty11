// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState, useEffect } from "react";
// import BtnLink from "../components/BtnLink";
// import {
//   faIdCard,
//   faTable,
//   faUserPen,
//   faUserSlash,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import {
//   BASE_API_URL,
//   downloadActiveUsersExcel,
//   roleName,
//   rowsPerPage,
//   token,
// } from "../server/serves";

// function Employees() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = () => {
//   fetch(`${BASE_API_URL}/api/Account/GetAllActiveUsers`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.status === 403) {
//         window.location.href = "/error403";
//         return;
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setUsers(Array.isArray(data) ? data : []);
//     })
//     .catch((error) => {
//       console.error("Error fetching employees:", error);
//       setUsers([]);
//     });
// };

// const softDeleteUser = (userId) => {
//   Swal.fire({
//     title: "هل أنت متأكد؟",
//     text: "سيتم أرشفة الموظف ولن يكون مرئيًا في القائمة!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#d33",
//     cancelButtonColor: "#3085d6",
//     confirmButtonText: "نعم، أرشفة!",
//     cancelButtonText: "إلغاء",
//     customClass: {
//       title: 'text-blue',
//       confirmButton: 'blue-button',
//       cancelButton: 'red-button'
//     },
//     didOpen: () => {
//       const popup = document.querySelector('.swal2-popup');
//       if (popup) popup.setAttribute('dir', 'rtl');
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`${BASE_API_URL}/api/Account/SoftDeleteUser/${userId}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.status === 403) {
//             window.location.href = "/error403";
//             return;
//           }
//           if (!response.ok) {
//             return response.text().then((text) => {
//               throw new Error(`خطأ في الحذف: ${text || response.status}`);
//             });
//           }
//           return response.json();
//         })
//         .then(() => {
//           Swal.fire({
//             title: "تم الأرشفة!",
//             text: "تم أرشفة الموظف بنجاح.",
//             icon: "success",
//             customClass: {
//               title: 'text-blue',
//               confirmButton: 'blue-button',
//               cancelButton: 'red-button'
//             },
//             didOpen: () => {
//               const popup = document.querySelector('.swal2-popup');
//               if (popup) popup.setAttribute('dir', 'rtl');
//             }
//           });
//           fetchEmployees();
//         })
//         .catch((error) => {
//           console.error("Error soft deleting user:", error);
//           Swal.fire({
//             title: "خطأ!",
//             text: `حدث خطأ أثناء أرشفة الموظف: ${error.message}`,
//             icon: "error",
//             customClass: {
//               title: 'text-red',
//               confirmButton: 'blue-button',
//               cancelButton: 'red-button'
//             },
//             didOpen: () => {
//               const popup = document.querySelector('.swal2-popup');
//               if (popup) popup.setAttribute('dir', 'rtl');
//             }
//           });
//         });
//     }
//   });
// };

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(users.length / rowsPerPage);
//   return (
//     <div>
//       <div className="d-flex mb-4 justify-content-between">
//         <div className="zzz d-inline-block p-3 ps-5">
//           <h2 className="m-0">الموظفيين</h2>
//         </div>

//         {roleName === "مدير الموارد البشرية" && (
//           <div className="d-flex">
//             <button
//               onClick={downloadActiveUsersExcel}
//               className="m-3 btn btn-success d-flex justify-content-center align-items-center"
//             >
//               <FontAwesomeIcon
//                 icon={faTable}
//                 style={{ fontSize: "1.4rem" }}
//                 color="#fff"
//                 className="ms-2"
//               />
//               <span>تنزيل البيانات</span>
//             </button>

//             <BtnLink
//               name="إضافة موظف"
//               link="/add-employee"
//               class="m-3 btn btn-primary m-0"
//             />
//           </div>
//         )}
//       </div>
//       <div className="row">
//         <div>
//           <table className="m-0 table table-striped">
//             <thead>
//               <tr>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   الاسم
//                 </th>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   المسمى الوظيفي
//                 </th>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   القسم
//                 </th>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   تاريخ التعيين
//                 </th>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   رقم الهاتف
//                 </th>
//                 <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
//                   المزيد
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((user) => (
//                   <tr key={user.id}>
//                     <td style={{ height: "50px" }}>{user.fullName}</td>
//                     <td style={{ height: "50px" }}>{user.roleName}</td>
//                     <td style={{ height: "50px" }}>{user.departmentName || "--"}</td>
//                     <td style={{ height: '50px' }}>{new Date(user.hireDate).toLocaleDateString('ar-EG')}</td>                    <td style={{ height: "50px" }}>{user.phoneNumber}</td>
//                     <td style={{ height: "50px" }}>
//                       <Link to={`/profile/user/${user.id}`} className="ms-1">
//                         <FontAwesomeIcon
//                           icon={faIdCard}
//                           color="green"
//                           className="fontt"
//                         />
//                       </Link>
//                       <Link to={`/employee/${user.id}`} className="ms-1">
//                         <FontAwesomeIcon
//                           icon={faUserPen}
//                           color="blue"
//                           className="fontt"
//                         />
//                       </Link>
//                       <FontAwesomeIcon
//                         icon={faUserSlash}
//                         onClick={() => softDeleteUser(user.id)}
//                         color="red"
//                         className="fontt"
//                         style={{ cursor: "pointer", marginLeft: "10px" }}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center text-danger p-3">
//                     لا يوجد موظفين نشطين
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           {users.length > rowsPerPage && (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginTop: "20px",
//               }}
//             >
//               <nav>
//                 <ul className="pagination">
//                   <li
//                     className={`page-item ${
//                       currentPage === 1 ? "disabled" : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link"
//                       onClick={() =>
//                         currentPage > 1 && setCurrentPage(currentPage - 1)
//                       }
//                     >
//                       السابق
//                     </button>
//                   </li>

//                   {Array.from({ length: totalPages }, (_, i) => (
//                     <li
//                       key={i}
//                       className={`page-item ${
//                         currentPage === i + 1 ? "active" : ""
//                       }`}
//                     >
//                       <button
//                         className="page-link"
//                         onClick={() => setCurrentPage(i + 1)}
//                       >
//                         {i + 1}
//                       </button>
//                     </li>
//                   ))}

//                   <li
//                     className={`page-item ${
//                       currentPage === totalPages ? "disabled" : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link"
//                       onClick={() =>
//                         currentPage < totalPages &&
//                         setCurrentPage(currentPage + 1)
//                       }
//                     >
//                       التالي
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Employees;



















import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import BtnLink from "../components/BtnLink";
import {
  faIdCard,
  faTable,
  faUserPen,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  BASE_API_URL,
  downloadActiveUsersExcel,
  roleName,
  rowsPerPage,
  token,
} from "../server/serves";

function Employees() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // حالة البحث

  console.log(users)
  useEffect(() => {
    fetchEmployees();
  }, [searchQuery]); // أضفنا searchQuery ليتم التحديث عند التغيير

  
  const fetchEmployees = () => {
    fetch(`${BASE_API_URL}/api/Account/GetAllActiveUsers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 403) {
          window.location.href = "/error403";
          return;
        }
        return response.json();
      })
      .then((data) => {
        const filteredUsers = Array.isArray(data)
          ? data.filter((user) =>
              user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.nationalID.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.roleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.departmentName.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : [];
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setUsers([]);
      });
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
      cancelButtonText: "إلغاء",
      customClass: {
        title: 'text-blue',
        confirmButton: 'blue-button',
        cancelButton: 'red-button'
      },
      didOpen: () => {
        const popup = document.querySelector('.swal2-popup');
        if (popup) popup.setAttribute('dir', 'rtl');
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${BASE_API_URL}/api/Account/SoftDeleteUser/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.status === 403) {
              window.location.href = "/error403";
              return;
            }
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(`خطأ في الحذف: ${text || response.status}`);
              });
            }
            return response.json();
          })
          .then(() => {
            Swal.fire({
              title: "تم الأرشفة!",
              text: "تم أرشفة الموظف بنجاح.",
              icon: "success",
              customClass: {
                title: 'text-blue',
                confirmButton: 'blue-button',
                cancelButton: 'red-button'
              },
              didOpen: () => {
                const popup = document.querySelector('.swal2-popup');
                if (popup) popup.setAttribute('dir', 'rtl');
              }
            });
            fetchEmployees();
          })
          .catch((error) => {
            console.error("Error soft deleting user:", error);
            Swal.fire({
              title: "خطأ!",
              text: `حدث خطأ أثناء أرشفة الموظف: ${error.message}`,
              icon: "error",
              customClass: {
                title: 'text-red',
                confirmButton: 'blue-button',
                cancelButton: 'red-button'
              },
              didOpen: () => {
                const popup = document.querySelector('.swal2-popup');
                if (popup) popup.setAttribute('dir', 'rtl');
              }
            });
          });
      }
    });
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <div>
      <div className="d-flex mb-4 justify-content-between">
        <div className="zzz d-inline-block p-3 ps-5">
          <h2 className="m-0">الموظفيين</h2>
        </div>

        {roleName === "مدير الموارد البشرية" && (
          <div className="d-flex">
            <button
              onClick={downloadActiveUsersExcel}
              className="m-3 btn btn-success d-flex justify-content-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faTable}
                style={{ fontSize: "1.4rem" }}
                color="#fff"
                className="ms-2"
              />
              <span>تنزيل البيانات</span>
            </button>

            <BtnLink
              name="إضافة موظف"
              link="/add-employee"
              class="m-3 btn btn-primary m-0"
            />
          </div>
        )}
      </div>

      {/* إضافة مربع البحث */}
      <div className="mb-4 me-3">
        <input
          type="text"
          placeholder="بحث عن موظف ..."
          className="form-control w-75"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // تحديث حالة البحث
        />
      </div>

      <div className="row">
        <div>
          <table className="m-0 table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  الاسم
                </th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  المسمى الوظيفي
                </th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  القسم
                </th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  تاريخ التعيين
                </th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  رقم الهاتف
                </th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>
                  المزيد
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((user) => (
                  <tr key={user.id}>
                    <td style={{ height: "50px" }}>{user.fullName}</td>
                    <td style={{ height: "50px" }}>{user.roleName}</td>
                    <td style={{ height: "50px" }}>{user.departmentName || "--"}</td>
                    <td style={{ height: '50px' }}>{new Date(user.hireDate).toLocaleDateString('ar-EG')}</td>
                    <td style={{ height: "50px" }}>{user.phoneNumber}</td>
                    <td style={{ height: "50px" }}>
                      <Link to={`/profile/user/${user.id}`} className="ms-1">
                        <FontAwesomeIcon
                          icon={faIdCard}
                          color="green"
                          className="fontt"
                        />
                      </Link>
                      <Link to={`/employee/${user.id}`} className="ms-1">
                        <FontAwesomeIcon
                          icon={faUserPen}
                          color="blue"
                          className="fontt"
                        />
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
                  <td colSpan="6" className="text-center text-danger p-3">
                    لا يوجد موظفين نشطين
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {users.length > rowsPerPage && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        currentPage > 1 && setCurrentPage(currentPage - 1)
                      }
                    >
                      السابق
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        currentPage < totalPages &&
                        setCurrentPage(currentPage + 1)
                      }
                    >
                      التالي
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employees;
