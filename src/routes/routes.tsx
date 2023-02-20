import Header from "../components/Header/Header";
import LandingPage from "../pages/LandingPage";
import Bottom from "../components/Bottom/Bottom";
import Error from "../pages/Error";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SingUpPage";
import ForgottenPassword from "../pages/ForgottenPassword";

export const routes = [
  {
    path: "/",
    exact: true,
    header: <Header />,
    main: <LandingPage />,
    bottom: <Bottom />,
  },
  {
    path: "/sign-in",
    exact: true,
    header: <Header />,
    main: <SignInPage />,
    bottom: <Bottom />,
  },
  {
    path: "/sign-up",
    exact: true,
    header: <Header />,
    main: <SignUpPage />,
    bottom: <Bottom />,
  },
  {
    path: "/forgotten-password",
    exact: true,
    header: <Header />,
    main: <ForgottenPassword />,
    bottom: <Bottom />,
  },
  {
    path: "/*",
    // exact: true,
    header: <Header />,
    main: <Error pageUrl={"/"} />,
    bottom: <Bottom />,
  },
];
