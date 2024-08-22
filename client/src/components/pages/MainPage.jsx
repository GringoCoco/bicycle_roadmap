import RouteCard from '../ui/RouteCard'
import useRoutes from "../../hooks/useRoutes";

export default function MainPage({user}) {
  const { routes } = useRoutes();
  return (
    <div>
      {routes.map((route) => 
      <RouteCard key={route.id} route={route} user={user}/>
      )}
    </div>
  )
}
