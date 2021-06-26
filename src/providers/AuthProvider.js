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
            tokenAuth(cid: "234567891234", password: "pass") {
              token
            }
          }
        `;
        const { data, loading, error } = await client.mutate({
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
