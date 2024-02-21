import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { IUserType } from "../apis/user/types";
import { getUser } from "../apis/user/api";

interface Context {
  token: string;
  user: Partial<IUserType>;
  changeToken: (token?: string) => void;
  fetchUser: () => void;
}

const InitialState = {
  token: "",
  user: {},
  changeToken: () => {},
  fetchUser: () => {},
};

const AuthContext = createContext<Context>(InitialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>(Cookies.get("token") ?? "");
  const [user, setUser] = useState<Partial<IUserType>>({});

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchUser();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
        return Promise.reject(error);
      }
    );
  }, [token]);

  const fetchUser = async () => {
    try {
      const result = await getUser();
      setUser(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeToken = (token?: string) => {
    const newToken = token ?? "";
    setToken(newToken);
    if (token) {
      Cookies.set("token", newToken);
    } else {
      Cookies.remove("token");
      setUser({});
    }
  };

  const AuthContextValue = {
    token,
    user,
    changeToken,
    fetchUser,
  };

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
