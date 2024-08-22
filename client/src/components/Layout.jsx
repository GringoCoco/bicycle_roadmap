
import NavBar from '../components/ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="justify-content-md-center">
        <Outlet />
      </div>
    </>
  );
}
