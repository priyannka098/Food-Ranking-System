 import {Routes,HashRouter,Route} from 'react-router-dom'
import LoginComponent from './features/Login/LoginComponent'
import PollingComponent from './features/Polling/PollingComponent'
import ResultComponent from './features/Results/ResultsComponent'
import './App.css';  /* to include css */

const App = () => {
  return(
    <div className="center-children">
      <HashRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/polling" element={<PollingComponent />} />
        <Route path="/results" element={<ResultComponent />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;  //export to use in other files
