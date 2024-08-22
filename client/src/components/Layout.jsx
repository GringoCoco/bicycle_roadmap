import NavBar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";
import Loader from "./hocs/Loader";

export default function Layout({ user, logoutHandler }) {
  return (
    <>
      <Loader isLoading={user.status === "fetching"}>
        <NavBar user={user} logoutHandler={logoutHandler} />
        <div className="justify-content-md-center">
          <Outlet />
        </div>
      </Loader>
    </>
  );
}
