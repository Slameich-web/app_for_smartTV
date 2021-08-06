import Form from "./components/form";
import QR_code_small from "./components/qr_code_small";
import Close from "./components/close";
function secondPage() {
  return (
    <div className="second_page">
        <Close/>
        <Form/>
        <QR_code_small/>
    </div>
  );
}

export default secondPage;
