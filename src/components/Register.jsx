import React, { useState } from "react";
import "../style/register.css";
import { useForm } from "react-hook-form";
// thu vien icon
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date, InferType } from "yup";
import * as yup from "yup";
//thu vien dieu huong
import { json } from "react-router-dom";

const regiSterSma = yup.object({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
});

const urlApi = "https://656708c964fcff8d730f9b4b.mockapi.io/api/login/users";

function Register() {

  const [dataUser, setdataUser] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regiSterSma), mode: "onchange" });
  console.log(errors)


  const handerRegister = (data) => {
    // e.preventDefault();
    const postUser = axios.post(urlApi, data);
    postUser.then((data) => setdataUser(data.data));
    postUser.catch((error) => console.log(error));
    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    reset();
    // setName("");
    // setEmail("");
    // setPassword("");
    // console.log(data)
  };

  // console.log(dataUser);
  // console.log(text)
  // console.log(email)
  // console.log(password)

  return (
    <div className="register-container">
      <div>
        <div class="title-container">
          <h1>XUAN HIEU SHOP</h1>
          <p>
            Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ
            đơn hàng nào.
          </p>
          <button>
            <a href="./login.html">Login</a>
          </button>
        </div>

        <div class="form-container">
          <form onSubmit={handleSubmit(handerRegister)}>
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FaFacebook />
              </a>
              <a href="#" class="social">
                <FaGooglePlus />
              </a>
              <a href="#" class="social">
              
                <TiSocialLinkedinCircular />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="name" placeholder="Name" {...register("name")} />
            <p>{errors.name?.message}</p>
            <input type="email" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <p>
              ALREADY HAVE AN ACCOUNT ? <a href="./login.html">lOGIN NOW</a>
            </p>
            <button onClick={(e) => handerRegister()}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
