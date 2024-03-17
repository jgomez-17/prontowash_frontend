import React, { useState, FormEvent} from 'react'
import { useRouter } from "next/navigation";
import './login.css'
import { testData } from "./data";

const login = () => {


  return (

     <form>
         <div className='form-container gap-5 flex flex-col'>
             <span className="title"> Acceso </span>
             <div className="fields">
               <div className="input-field">
                 <label> Usuario </label>
                 <input type="text" placeholder="Ingresa su usuario" required />
               </div>
               <div className="input-field">
                 <label>Contraseña</label>
                 <input type="password" placeholder="Ingresa tu contraseña" required />
               </div>
             </div>
             <button> ingresar </button>
         </div>
     </form>

  )
}

export default login