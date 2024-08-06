import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../utils/config'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'

function Signin() {

    let navigate = useNavigate()
    
    let [email, setEmail] = useState("")
    let [password,setPassword] = useState("")

    const handleSigin = async(e) => {
      e.preventDefault()
        try {
            let res = await axios.post(`${config.API_URL}${ApiRoutes.SIGNIN.path}`,{
                email,
                password
            })
            
            if(res.status === 200){
                let id = res.data.payload.userId;
                sessionStorage.setItem('token',res.data.token)
                toast.success(res.data.message);
                navigate(`/dashboard/${id}`)
            }

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const ForgotPassword = async(e) => {
      e.preventDefault()
        try {
            let res = await axios.post(`${config.API_URL}${ApiRoutes.FORGOT_PASSWORD.path}`,{
                email
            })
            if(res.status === 200){
                toast.success(res.data.message);
            }

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

  return <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e) => handleSigin(e)}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#" onClick={(e) => ForgotPassword(e)}>password?</a>
            </p>
          </div>
        </form>
      </div>
  
  </>
}

export default Signin