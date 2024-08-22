import RouteCard from '../ui/RouteCard'
import useRoutes from "../../hooks/useRoutes";

export default function MainPage({user}) {
  const { routes } = useRoutes();
  return (
    <div>
<<<<<<< HEAD
      {routes.map((el) => 
      <RouteCard user={user} key={el.id} route={el}/>
=======
      {routes.map((route) => 
      <RouteCard key={route.id} route={route} user={user}/>
>>>>>>> dev
      )}
    </div>
  )
}
