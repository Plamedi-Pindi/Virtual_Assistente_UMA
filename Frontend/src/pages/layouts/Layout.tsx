// Routers
import { Outlet } from "react-router-dom";
// Components
// import Header from "./components/Header";
// import Input from "./components/Input";

export default function Layout() {
  return (
    <div className="relative  w-full ">
      <Outlet />
    </div>
  )
}
