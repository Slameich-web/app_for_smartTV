import { Link } from "react-router-dom";
import qr_code from "./qr.code.svg"
function QR_code() {
  return (
    <div className="qr_content">
        <h4 className="qr_title">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br/> ПОДАРИТЕ ЕМУ СОБАКУ!</h4>
        <img alt="QR CODE" className="qr_image" src={qr_code}></img>
        <p className="qr_text">Сканируйте QR-код или нажмите ОК</p>
        <Link to="/secondPage"><button className="qr_button">ОК</button></Link>
    </div>
  );
}

export default QR_code;
