import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Login from './features/Login/login'
import Polling from './features/Polling/Polling'
import ResultComponent from './features/Results/ResultsComponent'
import './App.css';  /* to include css */

const App = () => {
  return(
    <div className="center-children">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/polling" element={<Polling />} />
        <Route path="/results" element={<ResultComponent />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
