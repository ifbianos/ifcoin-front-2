import React, {createContext, useContext, useState} from 'react';
import { useEffect } from 'react';
import API from '../api';

const UserContext = createContext();

export const login = (user) => {
  API.post('api/user/login', user)
  .then(function (response) {
    saveUserLocalStorage(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

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

  return (
    <UserContext.Provider
      value={{user, setUser, handleChange}}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if(!context) throw new Error("useSideBar must be used within a UserProvider");

  const { user, setUser, handleChange } = context;

  return { user, setUser, handleChange, login, saveUserLocalStorage };
}