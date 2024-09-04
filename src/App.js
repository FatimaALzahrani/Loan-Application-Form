import "./App.css";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    age: "",
    salery: "",
    emploey: false,
  });

  function checkDate() {
    console.log(info);
  }

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1>طلب قرض</h1>
        <hr />
        <label>الاسم</label>
        <input
          type="text"
          onChange={(event) => {
            setInfo({ ...info, name: event.target.value });
          }}
        />
        <label>رقم الجوال</label>
        <input
          type="number"
          onChange={(event) => {
            setInfo({ ...info, phone: event.target.value });
          }}
        />
        <label>العمر</label>
        <input
          type="number"
          onChange={(event) => {
            setInfo({ ...info, age: event.target.value });
          }}
        />
        <label>هل أنت موظف؟</label>
        <input
          type="checkbox"
          onChange={(event) => {
            setInfo({ ...info, emploey: event.target.checked });
          }}
        />
        <label>الراتب</label>
        <select
          onChange={(event) => {
            setInfo({ ...info, salery: event.target.value });
          }}
        >
          <option>اقل من 10 الاف ريال</option>
          <option>بين 10 و 25 الف ريال</option>
          <option>اكثر من 25 الاف ريال</option>
        </select>
        <button onClick={checkDate}>إرسال</button>
      </form>
    </div>
  );
}

export default App;
