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

  if (loading) {
    return (<h1 className='d-flex mt-5 justify-content-center align-items-center'>Loading...</h1>)
  }
  return (
    <>
      <NavBar />
      <h1 className='d-flex justify-content-center align-items-center'>Get All Data</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="card w-50  my-3" style={{ "width": "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={'/userDetail'} className="card-link">Go to home</Link>
            {/* <Link  className="card-link">Another link</Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadData
