import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../features/userDetailsSlice';

const NavBar = () => {
  const allUser = useSelector((state) => state.app.user);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const handleChange = (e) => {
    setSearchData(e.target.value);
  }
  useEffect(() => {
    dispatch(searchUser(searchData))
  }, [searchData])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to='/userDetail'>Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to='/readData'>All Data  ({allUser.length})</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
