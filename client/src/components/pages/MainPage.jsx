import RouteCard from '../ui/RouteCard'
import useRoutes from "./hooks/useRoutes";

export default function MainPage() {
  const { routes } = useRoutes();
  return (
    <div>
      {routes.map((el) => 
      <RouteCard key={el.id} route={el}/>
      )}
    </div>
  )
}
