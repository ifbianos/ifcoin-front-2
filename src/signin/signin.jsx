import { useState } from "react";
import axios from "axios";

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
    <form onSubmit={submitData}>
      <label>
        Name:
        <input type="text" name="name" value={user.name} onChange={ handleChange} />
      </label>
      <br></br>
      <label>
        Last Name:
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
      </label>
      <br></br>
      <label>
        Cpf:
        <input type="text" name="cpf" value={user.cpf} onChange={handleChange}/>
      </label>
      <br></br>
      <label>
        Role:
        <input type="text" name="role" value={user.role} onChange={handleChange}/>
      </label>
      <br></br>
      <label>
        Username:
        <input type="text" name="username" value={user.userRequest.username} onChange={handleChangeSecond} />
      </label>
      <br></br>
      <label>
        Password:
        <input type="text" name="password" value={user.userRequest.password} onChange={handleChangeSecond}/>
      </label>
      <br></br>
      <input type="submit" value="Enviar" />
    </form>

    
  );
}