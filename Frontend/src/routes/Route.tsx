// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// 
import { lazy } from "react";

// 
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../pages/layouts/Layout"));


export default function RouteApp() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
