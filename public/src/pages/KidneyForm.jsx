import { useState } from "react";

export default function KidneyForm() {
  const [gfr, setGfr] = useState("");
  const [ckd, setCkd] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = () => {
    if (!gfr || !ckd || !disease) {
      alert("請完整填寫所有項目！");
      return;
    }

    alert(`已填寫內容：
GFR：${gfr} ml/min
CKD 期數：第 ${ckd} 期
其他慢性疾病：${disease}

👉 下一頁準備開始！`);
    // window.location.href = '/allergen';
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="https://i.postimg.cc/Wp5Pbz2G/2025-06-10-155707.png" alt="腎臟圖" />
      </div>

      <h2>腎病概況</h2>

      <div className="form-group">
        <label htmlFor="gfr">腎絲球過濾率(GFR)</label>
        <div className="input-group">
          <input
            type="number"
            id="gfr"
            placeholder="請輸入數值"
            min="0"
            value={gfr}
            onChange={(e) => setGfr(e.target.value)}
          />
          <span>ml/min</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="ckd">CKD(期數)</label>
        <select id="ckd" value={ckd} onChange={(e) => setCkd(e.target.value)}>
          <option value="">請選擇</option>
          <option value="1">第一期</option>
          <option value="2">第二期</option>
          <option value="3">第三期</option>
          <option value="4">第四期</option>
          <option value="5">第五期</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="disease">其他慢性疾病</label>
        <select id="disease" value={disease} onChange={(e) => setDisease(e.target.value)}>
          <option value="">請選擇</option>
          <option value="高血壓">高血壓</option>
          <option value="糖尿病">糖尿病</option>
          <option value="心臟病">心臟病</option>
          <option value="其他">其他</option>
          <option value="無">無</option>
        </select>
      </div>

      <button id="next-btn" onClick={handleSubmit}>下一頁</button>
    </div>
  );
}
