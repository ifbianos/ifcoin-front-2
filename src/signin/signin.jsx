import { useState } from "react";
import axios from "axios";
import './signin.css';

export default function Signin() {

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    cpf: "",
    role: "",
    userRequest: {
        username: "",
        password: ""
    }
  })

  function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    });
  }

  function handleChangeSecond(e) {
    const value = e.target.value;
    setUser({
     ...user,
      userRequest: {
        ...user.userRequest,
        [e.target.name]: value
      },
    });
  }

  function submitData(evt){
    evt.preventDefault();
    axios.post('http://localhost:8080/api/user/requestaccount',
      user
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <form onSubmit={submitData} className='formulario'>
      <div className="form-data">
        <label>
          Last Name:
        </label>
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
      </div>
      <br></br>
      <div className="form-data">
        <label>
          Cpf:
        </label>
        <input type="text" name="cpf" value={user.cpf} onChange={handleChange}/>
      </div>
      <br></br>
      <label>
        Role:
      </label>
      <input type="text" name="role" value={user.role} onChange={handleChange}/>
      <br></br>
      <label>
        Username:
      </label>
      <input type="text" name="username" value={user.userRequest.username} onChange={handleChangeSecond} />
      <br></br>
      <label>
        Password:
      </label>
      <input type="text" name="password" value={user.userRequest.password} onChange={handleChangeSecond}/>
      <br></br>
      <input type="submit" value="Enviar" />
    </form>

    
  );
}