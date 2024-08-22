import RouteCard from '../ui/RouteCard'
import useRoutes from "../../hooks/useRoutes";

export default function MainPage({user}) {
  const { routes } = useRoutes();
  return (
    <div>
      {routes.map((el) => 
      <RouteCard user={user} key={el.id} route={el}/>
      )}
    </div>
  )
}
