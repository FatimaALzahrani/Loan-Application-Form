import "./Modal.css";

export default function Modal({ isVisable, info }) {
  console.log(info);
  let text = "";
  let color = "red";
  if (info.phone.length < 10 || info.phone.length > 12) {
    text = "تنسيق الرقم غير صحيح";
  } else if (parseInt(info.age) < 18 || parseInt(info.age) > 100) {
    text = "العمر غير مسموح به";
  } else {
    text = "تم إرسال النموذج بنجاح";
    color = "green";
  }

  if (isVisable) {
    return (
      <div id="model">
        <h2 className={color}>{text}</h2>
      </div>
    );
  } else {
    return <></>;
  }
}
