import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const username = import.meta.env.VITE_FRONT_USERNAME_API;
const password = import.meta.env.VITE_FRONT_PASSWORD_API;

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const stored = localStorage.getItem("accessToken");
        if (stored) {
          setToken(stored);
        } else {
          const res = await api.post<{ token: string }>("/auth/", {
            username,
            password,
          });
          localStorage.setItem("accessToken", res.data.token);
          setToken(res.data.token);
        }
      } catch (error) {
        setToken("random-token-placeholder");
        console.error("Failed to fetch token", error);
      }
    };

    fetchToken();
  }, [username, password]);

  const value: AuthContextType = React.useMemo(
    () => ({
      token,
      isAuthenticated: !!token,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
