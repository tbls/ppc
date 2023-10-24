import { useDispatch } from "react-redux"

import { login } from "../../store/auth/authSlice";

export const LoginPage = () => {

   const dispatch = useDispatch();

   const iniciarSesion = () => {
      dispatch(login());
   }

   return (
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
         <form className="bg-white card" style={{width:"20rem"}}>
            <div className="text-center">
               <i className="bi bi-person-circle" style={{fontSize:"5rem"}}></i>
            </div>
            <h1 className="text-center mb-5">PPC App</h1>
            <div className="form-floating mb-3 mx-3">
               <input type="email" className="form-control px-3" id="floatingInput" placeholder="name@example.com" />
               <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating mb-3 mx-3">
               <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
               <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <div className="d-grid mb-3 mx-3">
               <button className="btn btn-primary" type="button" onClick={iniciarSesion}>Ingresar</button>
            </div>   
         </form>
      </div>
   )
}
