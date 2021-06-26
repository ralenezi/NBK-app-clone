import { gql } from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";
import { client } from "..";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const login = async () => {
      if (!userToken) {
        const LOGIN = gql`
          mutation TokenAuth {
            tokenAuth(cid: "223344556677", password: "123") {
              token
            }
          }
        `;
        const { data } = await client.mutate({
          mutation: LOGIN,
        });
        localStorage.setItem("token", data.tokenAuth.token);
        setUser(true);
      } else {
        setUser(true);
      }
    };
    login();
  }, []);
  if (user)
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
  else return <div>Loading</div>;
};
