import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouter({ children, isAllowed, redirecTo }) {
  console.log('======>',children);
  if (!isAllowed) return <Navigate to={redirecTo} />;
  return children || <Outlet />;
}
