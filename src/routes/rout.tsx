import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import { authRoutes } from "./authRoutes";

const Rout = () => {
  const isLoggedIn = useSelector(
    (elem: { auth: { isLoggedIn: boolean } }) => elem.auth.isLoggedIn
  );
  if (isLoggedIn) {
    return RoutePattern(authRoutes);
  } else {
    return RoutePattern(routes);
  }
};
const RoutePattern = (routes: any) => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={<>{route.header}</>}
            />
          ))}
        </Routes>
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route key={index} path={route.path} element={<>{route.main}</>} />
          ))}
        </Routes>
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={<>{route.bottom}</>}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default Rout;
