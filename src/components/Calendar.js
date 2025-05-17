import React, { useEffect, useState } from "react";
import "../CSS/Calendar.css";
import { BASE_API_URL, roleName, token } from "../server/serves";

const Calendar = () => {
  const [holidays, setHolidays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // جلب العطلات من API
  useEffect(() => {
    fetch(`${BASE_API_URL}/api/Holiday/GetAllHolidays`,{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const datesOnly = data.map(item => item.date.substring(0, 10)); // تنسيق التواريخ إلى YYYY-MM-DD
        setHolidays(datesOnly);
      });
  }, []);

  const generateDays = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDay = startOfMonth.getDay(); // يوم الأسبوع (0 هو الأحد، 1 هو الإثنين)
    const totalDays = endOfMonth.getDate();
    const daysArray = [];

    for (let i = 1; i < (startDay === 0 ? 7 : startDay); i++) {
      daysArray.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      daysArray.push(day);
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isHoliday = (day) => {
    if (day === null) return false;
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return holidays.includes(formattedDate);
  };

  const handleDayClick = (day) => {
    if (day !== null && roleName === "مدير الموارد البشرية" && !isHoliday(day)) {
      const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      localStorage.setItem("clickedDate", formattedDate);
      window.location.href = "/add-holiday";
    }
  };

  const daysArray = generateDays();

  return (
    <div>
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`day-cell ${day ? "" : "empty"} ${day === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth() ? "selected" : ""} ${isHoliday(day) ? "locked" : ""}`}
            style={isHoliday(day) ? { backgroundColor: 'red', color: 'white', cursor: 'not-allowed' } : {}}
            title={isHoliday(day) ? "اجازة رسمية" : day !== null && roleName === "مدير الموارد البشرية" ? "إضافة اليوم للاجازات الرسمية؟" : ""}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;



