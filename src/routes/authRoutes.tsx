import Header from "../components/Header/Header";
import Bottom from "../components/Bottom/Bottom";
import NewsBoardPage from "../pages/NewsBoardPage";
import ProfilePage from "../pages/ProfilePage";
import Error from "../pages/Error";
import PhotosPage from "../pages/PhotosPage";
import FriendsPage from "../pages/FriendsPage";
import SettingsPage from "../pages/SettingsPage";
import SearchPage from "../pages/SearchPage";
import UploadPage from "../pages/UploadPage";

export const authRoutes = [
  {
    path: "/newsboard",
    exact: true,
    header: <Header />,
    main: <NewsBoardPage />,
    bottom: <Bottom />,
  },
  {
    path: "/profile/*",
    header: <Header />,
    main: <ProfilePage />,
    bottom: <Bottom />,
  },
  {
    path: "/upload-photo/*",
    header: <Header />,
    main: <UploadPage />,
    bottom: <Bottom />,
  },
  {
    path: "/photos",
    exact: true,
    // header: <Header login={true} />,
    main: <PhotosPage />,
    bottom: <Bottom />,
  },
  {
    path: "/friends",
    exact: true,
    header: <Header />,
    main: <FriendsPage />,
    bottom: <Bottom />,
  },

  {
    path: "/settings",
    exact: true,
    header: <Header />,
    main: <SettingsPage />,
    bottom: <Bottom />,
  },

  {
    path: "/search/*",
    exact: false,
    header: <Header />,
    main: <SearchPage />,
    bottom: <Bottom />,
  },
  {
    path: "/*",
    // exact: true,
    header: <Header />,
    main: <Error pageUrl={"/profile"} />,
    bottom: <Bottom />,
  },
];
