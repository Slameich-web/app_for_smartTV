import QR_code_small from "./qr_code_small";

function Completed() {
  return (
    <div className="second_page">
        <div className="form">
            <h2 className="completed_title">ЗАЯВКА ПРИНЯТА</h2>
            <h4 className="completed_text">Держите телефон под рукой.<br/>Скоро с Вами свяжется наш манеджер.</h4>
        </div>
        <QR_code_small/>
    </div>
  );
}

export default Completed;
