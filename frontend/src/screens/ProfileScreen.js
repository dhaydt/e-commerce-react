import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProfileScreen() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo]);
  const submithandler = (e) => {
    e.preventDefault();
    // update proflie
  };
  return (
    <div>
      <form className="form" onSubmit={submithandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={user.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                value={user.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="confirmPassword" placeholder="Your Password Again" />
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update Data
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
