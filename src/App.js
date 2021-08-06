import './App.css';
import videoBG from './components/video/video.mp4'
import QR_code from './components/qr_code';
import {Switch, Route, Link} from "react-router-dom"
import secondPage from './second_page';
import Completed from './components/completed';

function App() {

  return (
    <div className="App">
      <Link to="/secondPage">
        <video autoPlay loop muted className="videoBG">
          <source src={videoBG} type="video/mp4"/>
        </video>
      </Link>
        <div>
          <Switch>
            <Route exact path="/" component={QR_code}/>
            <Route path="/secondPage" component={secondPage}/>
            <Route path="/completed" component={Completed}/>
          </Switch>
        </div>
        
      </div>
    
  );
}

export default App;
