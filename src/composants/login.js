import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import axios from "axios";

function Login(){
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate(); 
 

  useEffect(() =>{
    userRef.current.focus();
  }, [])

    // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  //function to login
  const loginUser = async () => {
    try{
      const userResponse = await axios.post('http://127.0.0.1:8000/api/sign-in', user);
      // console.log('User added:', userResponse.data);
      // console.log(userResponse.data);
      localStorage.setItem('accessToken', userResponse.data.accessToken);
      const userDataResponse = await axios.get('http://127.0.0.1:8000/api/users/'+ userResponse.data.id);
      localStorage.setItem('userdata', JSON.stringify(userDataResponse.data));

      console.log(localStorage.getItem('accessToken'),localStorage.getItem('userdata'));
      alert('user has being connected')
      navigate('/dashboard');
     
    }catch(error){
      if (error.response) {
        console.error('Error response:', error.response.data); // Log response from server
        setErrMsg(error.response.data.message || 'Failed to login user');
      } else if (error.request) {
        console.error('No response received:', error.request); // Request made, but no response
        setErrMsg('No response from server');
      } else {
        console.error('Error message:', error.message); // Other errors
        setErrMsg(error.message);
      }
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    
      loginUser('');
  };
    return(

        <div class="wrapper fadeInDown">
          <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <Link className="active" to="/login">Login</Link>
          <Link className="active" to="/register">Register</Link>
          <br/><br/>

          <p ref = {errRef} className = {errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          {/* Login Form  */}
          <form action="#" onSubmit={handleSubmit}>
            <input  ref = {userRef} type="email" id="email" className="fadeIn second" name="email" placeholder="email"  value={user.email} onChange={handleChange} required/>
            <input  ref = {userRef} type="password" id="password" className="fadeIn third" name="password" placeholder="password"  value={user.password} onChange={handleChange} required/>
            <input  ref = {userRef} type="submit" class="fadeIn fourth" value="Log In"/>
          </form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <a class="underlineHover" href="/login">Forgot Password?</a>
          </div>

          </div>
        </div>
    )
}

export default Login;