import { useState, useEffect } from "react";

export default function GenderDOBForm() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [age, setAge] = useState(0);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1919 }, (_, i) => 1920 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const calculateDaysInMonth = (y, m) => new Date(y, m, 0).getDate();
  const days = Array.from({ length: calculateDaysInMonth(year, month) }, (_, i) => i + 1);

  useEffect(() => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge >= 0 ? calculatedAge : 0);
  }, [year, month, day]);

  const handleSubmit = () => {
    if (!selectedGender) {
      alert("請選擇性別！");
      return;
    }
    alert(`已選擇：
性別：${selectedGender}
生日：${year}年 ${month}月 ${day}日
年齡：${age} 歲

👉 下一頁可以開始囉！`);
    // window.location.href = '/kidney';
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="https://i.postimg.cc/348Kgkxk/image.png" alt="食食在 Logo" />
      </div>

      <div className="section">
        <h3>性別</h3>
        <div className="gender-options">
          {[
            { label: "女性", icon: "♀", className: "female" },
            { label: "男性", icon: "♂", className: "male" },
            { label: "其它", icon: "⚪", className: "other" },
          ].map(({ label, icon, className }) => (
            <div
              key={label}
              className={`gender-option ${selectedGender === label ? "active" : ""}`}
              onClick={() => setSelectedGender(label)}
              data-value={label}
            >
              <div className={`icon ${className}`}>{icon}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>出生年月日</h3>
        <div className="dob-select">
          <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select> 年

          <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select> 月

          <select value={day} onChange={(e) => setDay(parseInt(e.target.value))}>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select> 日
        </div>
        <div className="age-display">
          <span>{age}</span> 歲
        </div>
      </div>

      <button id="next-btn" onClick={handleSubmit}>下一頁</button>
    </div>
  );
}
