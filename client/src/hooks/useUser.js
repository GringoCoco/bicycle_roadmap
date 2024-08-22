import { useEffect, useState } from "react";
import axiosInstance, { setAccessToken } from "../components/api/axiosInstance";

export default function useUser() {
  const [user, setUser] = useState({ status: "fetching" });

  useEffect(() => {
    axiosInstance("/tokens/refresh").then(({ data }) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      }).then((data) => {
        setUser({ status: "logged", data: data.user });
        setAccessToken(data.accessToken);
      });
    });
  }, []);

  const logoutHandler = () => {
    axiosInstance("/auth/logout").then(() => {
      setUser({ status: "guest" });
      setAccessToken("");
    });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const { name, password, email } = Object.fromEntries(
      new FormData(e.target)
    );

    if (!name || !password || !email) return;

    axiosInstance
      .post("/auth/signup", { name, password, email })
      .then((res) => {
        setUser({ status: "logged", data: res.data.user });
        setAccessToken(res.data.accessToken);
      });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signin", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
      setAccessToken(data.accessToken);
    });
  };
  return {
    user,
    logoutHandler,
    signUpHandler,
    loginHandler
  }
}
