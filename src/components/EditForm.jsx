import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editData } from "../features/userDetailsSlice";

const EditForm = () => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && user) {
      const getSingleUser = user.find((ele) => ele.id === id);
      if (getSingleUser) {
        setSingleUser(getSingleUser);
      }
    }
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleUser({ ...singleUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editData(singleUser));
    navigate('/readData')

  };

  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={singleUser.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={singleUser.age || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={singleUser.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <br />
            <div>
              <label>Male: </label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={singleUser.gender === "Male"}
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label>Female: </label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={singleUser.gender === "Female"}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
