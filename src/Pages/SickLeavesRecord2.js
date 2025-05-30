import { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import { BASE_API_URL, rowsPerPage, token } from "../server/serves";

function SickLeavesRecord2() {
  const [sickLeavesWaiting, setSickLeavesWaiting] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSickLeaves = async () => {
      try {
        const urls = [
          `${BASE_API_URL}/api/SickLeave/GetAllWaitingSickLeaves`,
          `${BASE_API_URL}/api/SickLeave/GetAllWaitingCertifiedSickLeaves`
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

        setSickLeavesWaiting(combinedData);
      } catch (error) {
        console.error("Error fetching sick leave requests:", error);
        setSickLeavesWaiting([]);
      }
    };

    if (token) {
      fetchSickLeaves();
    }
  }, [token]);




  const allLeaves = [...sickLeavesWaiting];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = allLeaves.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(allLeaves.length / rowsPerPage);
  return (
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
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>المرجع</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>الاسم</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>تاريخ الاخطار</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>العنوان</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>نوع التحديث</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>الأرشيف</th>
                <th scope="col" style={{ backgroundColor: "#F5F9FF" }}>تحديث</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((leave, index) => (
                  <tr key={index}>
                    <th>#{leave.id}</th>
                    <th>{leave.userName}</th>
                    <th>{new Date(leave.requestDate).toLocaleDateString("ar-EG")}</th>
                    <th>
                      {leave.governorate} - {leave.state} - {leave.street}
                    </th>
                    <th>
                      {sickLeavesWaiting.some((lea) => lea.id === leave.id)
                        ? "التحديث الأول"
                        : "التحديث الثاني"}
                    </th>
                    <th>
                      <BtnLink
                        id={leave.id}
                        name="تفاصيل الاخطار"
                        link="/sick-leave-request"
                        class="btn btn-outline-primary"
                      />
                    </th>
                    <th>
                      <BtnLink
                        id={leave.id}
                        name="تحديث الاخطار"
                        link={
                          sickLeavesWaiting.some((l) => l.id === leave.id)
                            ? "/update-sick-leave"
                            : "/update-sick-leave2"
                        }
                        class="btn btn-outline-success"
                      />
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-danger p-3">
                    لا يوجد اخطارات مرضية حتى الآن
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {allLeaves.length > rowsPerPage && (
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

export default SickLeavesRecord2;
