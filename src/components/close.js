import {Link} from "react-router-dom"
function Close() {

  return (
    <div className="close">
      <Link to="/">
        <button className="close_button">X</button>
      </Link>
    </div>
  );
}

export default Close;
