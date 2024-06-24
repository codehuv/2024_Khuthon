import logo from './logo.svg';
import './App.css';
import { useState, EventHandler, ReactNode } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import Home from './home';
import Login from './login';
import Login_home from './login_home';
import Register from './register';
import Register_success from './register_success';
import Course_select from './course_select';
import Course_result from './course_result';
import Feedback from './feedback';
import MyPage from './mypage';
import 'bootstrap/dist/css/bootstrap.min.css';

  /*return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">사용자 이름:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
*/
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login_home" element = {<Login_home />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register_success" element={<Register_success />} />
      <Route path="/course_select" element = {<Course_select />} />
      <Route path="/course_result" element = {<Course_result />} />
      <Route path="/feedback" element = {<Feedback/>} />
      <Route path="/mypage" element = {<MyPage/>} />
    </Routes>
    </div>
    
    
  );
}  

export default App;
