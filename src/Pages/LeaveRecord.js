import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import { BASE_API_URL, rowsPerPage, token, userID } from "../server/serves";

function LeaveRecord() {
  const [leavesWating, setLeavesWating] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchLeaves = async () => {
        try {
          const urls = [
            `${BASE_API_URL}/api/NormalLeave/WaitingByGeneral_ManagerID/${userID}`,
            `${BASE_API_URL}/api/NormalLeave/WaitingByDirect_ManagerID/${userID}`
          ];

          const requests = urls.map((url) => 
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                      },
                  }).then((res) => {
                      if (!res.ok) throw new Error("Network response was not ok");
                      return res.json();
                  })
              );
  
              const results = await Promise.allSettled(requests);
  
              const combinedData = results.reduce((acc, result) => {
                  if (result.status === "fulfilled" && Array.isArray(result.value)) {
                      acc = acc.concat(result.value);
                  }
                  return acc;
              }, []);
  
              setLeavesWating(combinedData);
              } catch (error) {
                console.error("Error fetching leave requests:", error);
                setLeavesWating([]);
              }
          };
  
        fetchLeaves();
      }, [userID, token]);


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = leavesWating.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(leavesWating.length / rowsPerPage);
  return (
    <div>
      <div className="d-flex mb-4 justify-content-between">
        <div className="zzz d-inline-block p-3 ps-5">
          <h2 className="m-0">طلبات الاجازات</h2>
        </div>
      </div>
      <div className="row">
        <div>
          <table className="m-0 table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>المرجع</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>الاسم</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>القسم</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>رقم الهاتف</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>نوع الاجازة</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>تاريخ البداية</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>تاريخ النهاية</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>عدد الأيام</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>حالة الطلب</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>الأرشيف</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((leave, index) => (
                  <tr key={index}>
                    <td>#{leave.id}</td>
                    <td>{leave.userName}</td>
                    <td>{leave.departmentName}</td>
                    <td>{leave.phoneNumber}</td>
                    <td>اعتيادية</td>
                    <td>
                      {leave.endDate
                        ? new Date(leave.startDate).toLocaleDateString("ar-EG")
                        : "-"}
                    </td>
                    <td>
                      {leave.endDate
                        ? new Date(leave.endDate).toLocaleDateString("ar-EG")
                        : "-"}
                    </td>

                    <td>
                      {leave.days ? leave.days.toLocaleString("ar-EG") : "0"} أيام
                    </td>
                    <td
                      className={
                        leave.leaveStatus === 0 ? "text-danger" : "text-success"
                      }
                    >
                      {leave.leaveStatus === 0 ? "معلقة" : "مقبولة"}
                    </td>
                    <td>
                      <BtnLink
                        id={leave.id}
                        name="عرض الاجازة"
                        link="/manger-normal-leave-request"
                        class="btn btn-outline-primary"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center text-danger p-3">
                    لا يوجد طلبات اجازات
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {leavesWating.length > rowsPerPage && (
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

export default LeaveRecord;
