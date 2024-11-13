import React, { useRef, useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate(); 

  const [user, setUser] = useState({
    username: '',
    email: '',
    company: '',
    dateOfBirth: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (userRef.current){
       userRef.current.focus();

   }
  }, []);

  // Handle input change to update state
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Function to add a user using axios POST request
  const addUser = async () => {
    try {
      const userResponse = await axios.post('http://127.0.0.1:8000/api/sign-up', user);
      console.log('User added:', userResponse.data);
      alert('user added!')
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data); // Log response from server
        setErrMsg(error.response.data.message || 'Failed to register user');
      } else if (error.request) {
        console.error('No response received:', error.request); // Request made, but no response
        setErrMsg('No response from server');
      } else {
        console.error('Error message:', error.message); // Other errors
        setErrMsg(error.message);
      }
    }
  };

  // Handle form submission()
  const handleSubmit = (e) => {
   
    e.preventDefault();
    
    addUser(); // Call the function to add the user
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        {/* Tabs Titles */}
        <Link className="active" to="/login">Login</Link>
        <Link className="active" to="/register">Register</Link>
        <br/><br/>

        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>

        <form id="Register" action="#" onSubmit={handleSubmit}>
          <div className="inputSection">
           
            <input
              ref={userRef}
              type="text"
              id="Username"
              name="username"
              className="inputText"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
              required
            />
            <span className="focus-border"></span>
          </div>

          <div className="inputSection">
           
            <input
              ref={userRef}
              type="email"
              id="Email"
              name="email"
              className="inputText"
              placeholder="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <span className="focus-border"></span>
          </div>

          {/* <div className="inputSection">
            
            <input
              ref={userRef}
              type="text"
              id="company"
              name="company"
              className="inputText"
              placeholder="company"
              value={user.company}
              onChange={handleChange}
              
            />
            <span className="focus-border"></span>
          </div>

          <div className="inputSection">
            <input
              ref={userRef}
              type="date"
              id="Date-of-Birth"
              name="dateOfBirth"
              className="inputText"
              placeholder="0000/00/00"
              value={user.dateOfBirth}
              onChange={handleChange}
            
            />
            <span className="focus-border"></span>
          </div> */}

          <div className="inputSection">
            <input
                ref={userRef}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="inputText"
              placeholder="phone number"
              value={user.phoneNumber}
              onChange={handleChange}
              required
            />
            <span className="focus-border"></span>
          </div>

          <div className="inputSection">
            <input
              ref={userRef}
              type="password"
              id="Password"
              name="password"
              className="inputText"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <span className="focus-border"></span>
          </div>

          {/* <div className="inputSection">
            <input
              ref={userRef}
              type="password"
              id="C-Password"
              name="confirmPassword"
              className="inputText"
              placeholder="confirm password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
            <span className="focus-border"></span>
          </div> */}

          <div className="formFooter">
          <input type="submit" className="fadeIn fourth" value="Register"/>
          </div>
        </form>

        {/* Remind Password */}
        {/* <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div> */}

      </div>
    </div>
  );
}

export default Register;
