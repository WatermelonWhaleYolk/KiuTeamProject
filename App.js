import './App.css';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Pagination from './component/gesipan/notice_board_pagination.jsx';
import Login from './component/gesipan/login.jsx';
import FindId from './component/gesipan/find_id.jsx';
import FindPassword from './component/gesipan/find_password.jsx';
import Signup from './component/gesipan/signup.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/find-password" element={<FindPassword />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Pagination />
    </div>
  );
}

export default App;
