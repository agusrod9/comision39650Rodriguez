import React,{ useState } from "react";

const Login = () => {


  const [userData, setUserData] = useState({
    usuario: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }


  const envioFormulario = (e) => {
    e.preventDefault();
    console.log(userData);
  }

  return (
    <div>
      <form onSubmit={envioFormulario}>
        <input 
          type="text" 
          placeholder="Usuario"
          name="usuario"
          value={userData.usuario}
          onChange={handleChange}
        />
        <input
          type="text" 
          placeholder="Contraseña"
          name="password"
          value={userData.password}
          onChange={handleChange}  
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
    
  )
}

export default Login;
 