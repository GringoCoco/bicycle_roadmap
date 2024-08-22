
import NavBar from '../components/ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout({user, logoutHandler={logoutHandler}}) {
  return (
    <>
      <NavBar user={user} />
      <div className="justify-content-md-center">
        <Outlet />
      </div>
    </>
  );
}
