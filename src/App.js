import "./App.css";
import { useState } from "react";
import Modal from "./Modal";
let buttonClass = "inactive";

function App() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    age: "",
    salery: "",
    emploey: false,
  });
  const [visable, setVisable] = useState(false);

  function checkDate() {
    setVisable(true);
  }

  return (
    <div
      className="App"
      onClick={() => {
        if (visable === true) setVisable(false);
      }}
    >
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
            if (info.phone !== "" && info.name !== "" && info.age !== "") {
              buttonClass = "active";
            } else {
              buttonClass = "inactive";
            }
          }}
        />
        <label>رقم الجوال</label>
        <input
          type="number"
          onChange={(event) => {
            setInfo({ ...info, phone: event.target.value });
            if (info.phone !== "" && info.name !== "" && info.age !== "") {
              buttonClass = "active";
            } else {
              buttonClass = "inactive";
            }
          }}
        />
        <label>العمر</label>
        <input
          type="number"
          onChange={(event) => {
            setInfo({ ...info, age: event.target.value });
            if (info.phone !== "" && info.name !== "" && info.age !== "") {
              buttonClass = "active";
            } else {
              buttonClass = "inactive";
            }
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
        <button
          disabled={buttonClass === "inactive"}
          className={buttonClass}
          onClick={checkDate}
        >
          إرسال
        </button>
      </form>
      <Modal isVisable={visable} info={info} />
    </div>
  );
}

export default App;
