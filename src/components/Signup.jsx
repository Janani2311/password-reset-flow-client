import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import config from '../utils/config';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';

function Signup() {

      let navigate = useNavigate();
      let [firstName, setFirstName] = useState("")
      let [lastName, setLastName] = useState("")
      let [email, setEmail] = useState("")
      let [password, setPassword] = useState("")

      const handleSignUp = async(e) => {
        e.preventDefault()
          try {
              let res = await axios.post(`${config.API_URL}${ApiRoutes.SIGNUP.path}`,{
                  firstName,
                  lastName,
                  email,
                  password
              })
              if(res.status === 201){
                  toast.success(res.data.message);
                  navigate('/signin')
              }
  
          } catch (error) {
              toast.error(error.response.data.message)
          }
      }
  

  return <>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to="/signin">Sign In</Link>            
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane" 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSignUp(e)}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  
  </>
}

export default Signup