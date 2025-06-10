import { useState } from "react";

export default function AllergenForm() {
  const allergens = [
    { label: "花生", img: "https://i.postimg.cc/HLgwNp8K/2025-06-10-164139.png" },
    { label: "堅果類", img: "https://i.postimg.cc/nzVvH0kG/2025-06-10-164130.png" },
    { label: "牛奶", img: "https://i.postimg.cc/T3mjQy1g/2025-06-10-164152.png" },
    { label: "海鮮", img: "https://i.postimg.cc/jdD4w3r8/2025-06-10-164204.png" },
    { label: "無", img: "https://i.postimg.cc/2jnVHPfb/2025-06-10-164853.png" },
  ];

  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const toggleAllergen = (value) => {
    setSelectedAllergens((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (selectedAllergens.length === 0) {
      alert("請至少選擇一個過敏源或按下一步繼續");
    } else {
      const selected = selectedAllergens.join("、");
      alert(`你選擇的過敏源：${selected}\n\n👉 前往下一頁`);
      // window.location.href = '/exercise';
    }
  };

  return (
    <div className="container">
      <h2>過敏源</h2>

      <div className="allergen-grid">
        {allergens.map((item) => (
          <div
            key={item.label}
            className={`allergen-option ${selectedAllergens.includes(item.label) ? "active" : ""}`}
            data-value={item.label}
            onClick={() => toggleAllergen(item.label)}
          >
            <img src={item.img} alt={item.label} />
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>

      <button id="next-btn" onClick={handleSubmit}>下一步</button>
    </div>
  );
}
