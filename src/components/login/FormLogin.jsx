import React from 'react'
import './FormLogin.css'
import { Link } from 'react-router-dom'
export default function FormLogin() {
   return (
      <div className="loginContainer">
         <form className='container-login'>
            <img src="/emm-logo2.png" alt="" />

            <h4>Login</h4>

            <form className="form-login" action="" method="post">
               <input type="text" placeholder='CPF' />
               <input type="password" placeholder='Senha' />

               <div className="login-links">
                  <Link to={"/"}>
                     Logar como funcionário
                  </Link>

                  <div>
                     <Link to={"/aluno/1/matricula"} >
                        Esqueci minha senha
                     </Link>
                     <Link to={"/aluno/1/matricula"} >
                        Não tenho login
                     </Link>
                  </div>

               </div>
               <Link to={"/aluno/1/matricula"} className='login-btn' >
                  Fazer Login
               </Link>
            </form>
         </form>
      </div>
   )
}
