import React, { useState } from 'react';
import NavBar from './NavBar';
import './style.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import ReadData from './ReadData';

const UserFrom = () => {
  const [usersDetail, setUsersDetail] = useState({
    name: '',
    age: '',
    email: '',
    gender: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setUsersDetail({ ...usersDetail, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usersDetail)
    dispatch(createUser(usersDetail))
    navigate('/readData')
  }
  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
            <input type="number" className="form-control" name='age' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">email</label>
            <input type="email" className="form-control" name='email' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
            <br />
            Male : <input type="radio" value='Male' name='gender' onChange={handleChange} />
            <br />
            Female : <input type="radio" value='Female' name='gender' onChange={handleChange} />
          </div>
          <button type="submit"
            className="btn btn-primary"
          // onClick={handleSubmit}
          >Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserFrom;
