import React, {createContext, useContext, useState} from 'react';
import { useEffect } from 'react';
import API from '../api';

import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function saveUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify({
    "id": user.user.id,
    "name": user.name,
    "role": user.user.role
  }))
}

export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    "id": "",
    "name": "",
    "role": ""
  })

  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData()
    if (!userData) return;

    setUser(getUserData())
    console.log('user apos setar', user)
  }, [])

  function handleChange(e) {
    console.log('e', e)
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    });
  }

  const make_login = (user) => {
    API.post('api/user/login', user)
    .then(function (response) {
      saveUserLocalStorage(response.data)
      navigate('/');
    })
    .catch(function (error) {
      window.alert(error.response.data.erro)
    });
  }

  return (
    <UserContext.Provider
      value={{user, setUser, handleChange, make_login}}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if(!context) throw new Error("useSideBar must be used within a UserProvider");

  const { user, setUser, handleChange, make_login } = context;

  return { user, setUser, handleChange, make_login, saveUserLocalStorage };
}