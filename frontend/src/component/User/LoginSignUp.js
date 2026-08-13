import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

import React, { Fragment, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  // Path detection for splitting Login and Register pages
  const isRegisterPage = location.pathname === "/register";

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    address: "",
  });

  const { name, email, password, mobileNo, address } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("mobileNo", mobileNo);
    myForm.set("address", address);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  const navigateToTab = (tab) => {
    if (tab === "login") {
      history.push("/login");
    } else {
      history.push("/register");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            {/* 3D Scene Wrapper */}
            <div className="card3DWrapper">
              <div className={`LoginSignUpBox ${isRegisterPage ? "flipped" : ""}`}>
                
                {/* FRONT FACE - LOGIN CARD */}
                <div className="cardFace cardFront">
                  <div className="login_signUp_toggle">
                    <p className="activeTab" onClick={() => navigateToTab("login")}>LOGIN</p>
                    <p onClick={() => navigateToTab("register")}>REGISTER</p>
                  </div>
                  
                  <form className="loginForm" onSubmit={loginSubmit}>
                    <div className="formHeader">
                      <h2>Welcome Back</h2>
                      <p>Sign in to continue your shopping journey</p>
                    </div>

                    <div className="loginEmail">
                      <MailOutlineIcon />
                      <input
                        type="text"
                        placeholder="Email / Mobile Number"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="loginPassword">
                      <LockOpenIcon />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </div>
                    
                    <Link className="forgotPasswordLink" to="/password/forgot">Forgot Password?</Link>
                    <input type="submit" value="Login" className="loginBtn" />
                    
                    <p className="switchPrompt">
                      New to Ecommerce? <span onClick={() => navigateToTab("register")}>Create account</span>
                    </p>
                  </form>
                </div>

                {/* BACK FACE - REGISTER CARD */}
                <div className="cardFace cardBack">
                  <div className="login_signUp_toggle">
                    <p onClick={() => navigateToTab("login")}>LOGIN</p>
                    <p className="activeTab" onClick={() => navigateToTab("register")}>REGISTER</p>
                  </div>
                  
                  <form
                    className="signUpForm"
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                  >
                    <div className="formHeader">
                      <h2>Join Us</h2>
                      <p>Create your credentials to explore products</p>
                    </div>

                    <div className="signUpName">
                      <FaceIcon />
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"
                        value={name}
                        onChange={registerDataChange}
                      />
                    </div>
                    
                    <div className="signUpEmail">
                      <MailOutlineIcon />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={registerDataChange}
                      />
                    </div>
                    
                    <div className="signUpPassword">
                      <LockOpenIcon />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={registerDataChange}
                      />
                    </div>
                    
                    <div className="signUpMobile">
                      <PhoneIcon />
                      <input
                        type="text"
                        placeholder="Mobile Number (10 digits)"
                        required
                        name="mobileNo"
                        value={mobileNo}
                        onChange={registerDataChange}
                        maxLength="10"
                        pattern="[0-9]{10}"
                      />
                    </div>
                    
                    <div className="signUpAddress">
                      <HomeIcon />
                      <input
                        type="text"
                        placeholder="Address"
                        required
                        name="address"
                        value={address}
                        onChange={registerDataChange}
                      />
                    </div>

                    <div id="registerImage">
                      <img src={avatarPreview} alt="Avatar Preview" />
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={registerDataChange}
                      />
                    </div>
                    
                    <input type="submit" value="Register" className="signUpBtn" />
                    
                    <p className="switchPrompt">
                      Already have an account? <span onClick={() => navigateToTab("login")}>Sign in</span>
                    </p>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </Fragment>
      )}



