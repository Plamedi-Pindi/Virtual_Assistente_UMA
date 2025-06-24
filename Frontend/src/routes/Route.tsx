// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// 
import { lazy, Suspense } from "react";
import LoadingFallback from "../components/Load/Load";


// 
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const OnBoarding = lazy(() => import("../components/OnBoarding/OnBoarding"))
const Chatpage = lazy(() => import("../pages/chats/Chats"));


export default function RouteApp() {
  return (
    <Router>

      <Suspense fallback={ <LoadingFallback />}>

        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/virtualassistent" element={<Chatpage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
