import Login from "@/components/Login/Login";
import { ILogin } from "@/interfaces/LoginRegister";
import React from "react";

const login = (dataUser: ILogin = { /* valores por defecto aquí */ }) => {
  return (
    <div>
      <Login dataUser={dataUser} />
    </div>
  );
};

export default login;
