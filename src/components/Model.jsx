import React from 'react'
import './model.css'
import { useSelector } from 'react-redux'
const Model = ({ id, model, setModel }) => {
  const allUser = useSelector(state => state.app.user)
  // console.log("model all user", allUser)
  const user = allUser.filter(ele => ele.id === id)
  // console.log(user, "", id)
  return (
    <div className='modelBackground'>
      <div className="modelContainer">
        <button className='d-flex float-end border-0 fw-bold' onClick={() => setModel(false)} >X</button>
        <h1>{user[0].name}</h1>
        <h1>{user[0].age}</h1>
        <p className='fw-bold'>{user[0].email}</p>
        <p className='fw-bold'>{user[0].gender}</p>
      </div>
    </div>
  )
}

export default Model
