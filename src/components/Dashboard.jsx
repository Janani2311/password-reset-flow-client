import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../utils/config';
import Button from 'react-bootstrap/Button';
import useLogout from '../hooks/useLogout';
import toast from 'react-hot-toast';

function Dashboard() {

    var id = useParams().id;
    let logout = useLogout();
    let auth_token = sessionStorage.getItem('token')
    let [data,setData] = useState([])


    const fetchData = async() => {
        try {
            let res = await axios.get(`${config.API_URL}/user/${id}`,{
                headers:{
                    Authorization:`Bearer ${auth_token}`
                  }
            })
            if(res.status === 200 ){
                setData(res.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        if(auth_token)
            fetchData()
          else
            logout()
    },[])


    
  return<>
        <div className='logout'>
            <Button variant="danger" onClick={()=> logout()}>Logout</Button>
        </div>
        <div className="page-content page-container" id="page-content">
        <div className="padding">
        <div className="row container d-flex justify-content-center">
        <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                            <div className="m-b-25">
                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                            </div>
                            <h6 className="f-w-600">{data.firstName}&nbsp;{data.lastName}</h6>
                            <p>{data.role}</p>
                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-block">
                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="m-b-10 f-w-600">Email</p>
                                    <h6 className="text-muted f-w-400">{data.email}</h6>
                                </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Customer details</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Status</p>
                                    <h6 className="text-muted f-w-400">{data.status?"Active":"Inactive"}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Created At</p>
                                    <h6 className="text-muted f-w-400">{data.createdAt}</h6>
                                </div>
                            </div>
                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  
  </>
}

export default Dashboard