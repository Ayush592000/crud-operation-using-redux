import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, readData } from '../features/userDetailsSlice';
import { Link } from 'react-router-dom';
import Model from './Model';

const ReadData = () => {
  const [getData, setData] = useState();
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [model, setModel] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readData());
  }, []);

  const { user, loading, searchData } = useSelector(state => state.app);

  useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);

  if (loading) {
    return (<h1 className='d-flex mt-5 justify-content-center align-items-center'>Loading...</h1>);
  }

  return (
    <>
      {model && <Model id={id} model={model} setModel={setModel} />}
      <NavBar />
      <h1 className='d-flex justify-content-center align-items-center'>Get All Data</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <input
          type="radio"
          checked={radioData === ""}
          onChange={() => setRadioData("")}
          className='align-content-center'
        />
        <label>All Data &nbsp;</label>
        <input
          type="radio"
          name='gender'
          value='Male'
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
          className='align-content-center'
        />
        <label>Male &nbsp;</label>
        <input
          type="radio"
          name='gender'
          value="Female"
          checked={radioData === "Female"}
          onChange={(e) => setRadioData(e.target.value)}
          className='align-content-center'
        />
        <label>Female &nbsp;</label>
      </div>
      {
        getData && getData
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radioData === "Male") {
              return ele.gender === radioData;
            } else if (radioData === "Female") {
              return ele.gender === radioData;
            } else {
              return ele;
            }
          })
          .map((item) => (
            <div className='d-flex justify-content-center align-items-center' key={item.id}>
              <div className="card w-50 mx-auto">
                <div className="card-body">
                  <h5 className="card-title">User Name: {item.name}</h5>
                  <h6 className="card-text mb-2">User Age: {item.age}</h6>
                  <h6 className="card-subtitle text-muted">Email: {item.email}</h6>
                  <h6 className="card-text">Gender: {item.gender}</h6>
                  <button
                    className="card-link text-decoration-none btn-primary"
                    onClick={() => [setId(item.id), setModel(true)]}
                  >
                    View
                  </button>
                  <button
                    className="card-link text-decoration-none btn-outline-primary"
                  >
                    Add More
                  </button>
                  <button
                    className="card-link text-decoration-none btn-outline-danger"
                    onClick={() => dispatch(deleteUser(item.id))}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit/${item.id}`}
                    className="card-link text-decoration-none"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))
      }
    </>
  );
};

export default ReadData;
