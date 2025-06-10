import { useState } from "react";

export default function ExerciseForm() {
  const options = [
    { label: "久坐", img: "https://i.postimg.cc/vHNF5ZSW/2025-06-10-165145.png" },
    { label: "輕度活動", img: "https://i.postimg.cc/ZKRz9djb/2025-06-10-165153.png" },
    { label: "中度活動", img: "https://i.postimg.cc/pVktXZfc/2025-06-10-165201.png" },
    { label: "重度活動", img: "https://i.postimg.cc/T1k87d2v/2025-06-10-165209.png" },
    { label: "無", img: "https://i.postimg.cc/2jnVHPfb/2025-06-10-164853.png" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      alert("請選擇一項運動強度！");
    } else {
      alert(`你選擇的運動強度：${selectedOption}\n\n👉 完成問卷`);
    }
  };

  return (
    <div className="container">
      <h2>運動強度</h2>

      <div className="exercise-grid">
        {options.map((opt) => (
          <div
            key={opt.label}
            className={`exercise-option ${selectedOption === opt.label ? "active" : ""}`}
            data-value={opt.label}
            onClick={() => handleClick(opt.label)}
          >
            <img src={opt.img} alt={opt.label} />
            <div className="label">{opt.label}</div>
          </div>
        ))}
      </div>

      <button id="next-btn" onClick={handleSubmit}>下一步</button>
    </div>
  );
}
