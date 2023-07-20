import './App.css';
import LandPage from './Pages/LandPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import AdminPage from './Admin/AdminPages/AdminPage';
import AddusersPage from './Admin/AdminPages/AddusersPage';
import AllusersPage from './Admin/AdminPages/AllusersPage';
import AdminLoginPage from './Admin/AdminPages/AdminLoginPage';
import EditUser from './Admin/AdminPages/EditUser';

function App() {
  return (
    <div>
       <Router>
       <Routes>
          <Route path="/login" element={<LoginPage />} exact/>
          <Route path="/register" element={<RegisterPage />} exact/>
          <Route path="/" element={<LandPage />} exact/>
          <Route path="/home" element={<Home/>} exact/>
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/allUsers" element={<AllusersPage />} />
          <Route path="/admin/addusers" element={<AddusersPage />} />
          <Route path="/admin/EditUser/:id" element={<EditUser />} />
          <Route path="/admin/logout" element={<AdminLoginPage />} />

          
          
        </Routes>
       </Router>
      
    


    </div>
    
  );
}

export default App;
