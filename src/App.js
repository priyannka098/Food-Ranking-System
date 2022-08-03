import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Login from './features/Login/login'
import Polling from './features/Polling/Polling'
import './App.css';  /* to include css */

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/polling" element={<Polling />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
