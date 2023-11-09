import React from 'react'
import './FormLogin.css'
import { Link } from 'react-router-dom'
export default function FormLogin() {
   return (
      <div className="loginContainer">
         <form className='form-login'>
            <img src="/emm-logo2.png" alt="" />

            <h1>Login</h1>

            <Link to={"/aluno"} >
               <button className='login-btn'>Logar como aluno</button>
            </Link>
            <Link to={"/admin"}>
               <button className='login-btn'>Logar como funcionário</button>
            </Link>
         </form>
      </div>
   )
}
