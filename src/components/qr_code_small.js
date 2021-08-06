import qr_code from "./qr.code.svg"

function QR_code_small() {
  return (
    <div className="qr_small_content">
        <p className="qr_small_text">СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img alt="QR CODE" className="qr_small_image" src={qr_code}></img>
    </div>
  );
}

export default QR_code_small;
