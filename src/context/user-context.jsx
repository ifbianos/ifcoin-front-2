import React, {createContext, useContext, useState} from 'react';
import API from '../api';

const UserContext = createContext();

export const login = (user) => {
  API.post('api/user/login', user)
  .then(function (response) {
    saveUserSessionStorage(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function saveUserSessionStorage(user) {
  sessionStorage.setItem("user", JSON.stringify({
    "id": user.user.id,
    "name": user.name,
    "role": user.user.role
  }))
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })


  console.log('context', user)
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

  return { user, setUser, handleChange, login, saveUserSessionStorage };
}