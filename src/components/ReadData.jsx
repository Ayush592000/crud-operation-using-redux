import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux';
import { readData } from '../features/userDetailsSlice';
import { Link } from 'react-router-dom';

const ReadData = () => {
  const [getData, setData] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(readData())
  }, [])
  const { user, loading } = useSelector(state => state.app)
  console.log("user", user)

  useEffect(() => {
    if (user) {
      setData(user)
    }
  }, [user])

  if (loading) {
    return (<h1 className='d-flex mt-5 justify-content-center align-items-center'>Loading...</h1>)
  }

  console.log("getData", getData)
  return (
    <>
      <NavBar />
      <h1 className='d-flex justify-content-center align-items-center'>Get All Data</h1>
      {
        getData && getData.map((item, id) => (


          <div className='d-flex justify-content-center align-items-center' key={id}>
            <div className="card w-50  mx-auto" >
              <div className="card-body">
                <h5 className="card-title">User Name : {item.name}</h5>
                <h6 className="card-text mb-2 ">User Age : {item.age}</h6>
                <h6 className="card-subtitle text-muted">Email : {item.email}</h6>
                <h6 className="card-text">Gender : {item.gender}</h6>
                <Link to={'/userDetail'} className="card-link text-decoration-none">Add More</Link>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ReadData
