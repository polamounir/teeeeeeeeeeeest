import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import MainOverview from "../components/Home/dashboard/MainOverview";
import ProductsOverview from "../components/Home/products/ProductsOverview";
import LiveChat from "../pages/LiveChat";
// import { useDispatch } from "react-redux";

// Lazy Loaded Components
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

// const Loading = () => <Loader />;

const AppRoutes = () => {
  // const dispatch = useDispatch();
  const handleCloseMenu = () => {
    //   dispatch(closeAllMenus());
  };
  return (
    <Router>
      {/* <ScrollToTopNavigation /> */}

      {/* <Suspense fallback={<Loading />}> */}
      <Suspense fallback={<div>Loading ...</div>}>
        <div onClick={handleCloseMenu}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Home />}>
              <Route path="" element={<MainOverview />} />
              <Route path="products" element={<ProductsOverview />} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="users" element={<div>users</div>} />
              <Route path="sales" element={<div>sales</div>} />
              <Route path="settings" element={<div>settings</div>} />
            </Route>
            {/* <Route path="/dashboard/:path" element={<Home />} /> */}
            {/* <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
                }
                /> */}
            <Route path="chat" element={<LiveChat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>notfound</div>} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
