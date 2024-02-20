import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const checkLogin = async () => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
    toast.promise(
      resolveAfter3Sec,
      {
        pending: 'Kutib turing',
      }
    );
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      const response = await axios.post('users/token/', formData);
      if (response.status === 200) {
        toast.success('Siz kirdingiz');
        setTimeout(() => {
          localStorage.setItem('user', response.data.access);
          navigate('/admin/home');
        }, 2000);
      } else {
        // Handle non-OK response without throwing an error unnecessarily
        toast.error('Siz kira olmadingiz');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.message || 'An error occurred during login');
    }
  };

  return (
    <div className='body'>
      <div className="box">
        <form>
          <h2>Login</h2>
          <div className="inputBx">
            <span></span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <span></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input type="button" value="Sign in" onClick={checkLogin} />
          </div>
          <div className="groupi">
            <a href="https://t.me/akmalxon000">
              <p>Forgat Password</p>
            </a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;