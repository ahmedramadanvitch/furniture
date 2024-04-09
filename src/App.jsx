/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import LayOut from "./components/LayOut/LayOut";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import ForgetPassword from "./pages/Authentication/ForgetPassword/ForgetPassword";
import VerifyCode from "./pages/Authentication/VerifyCode/VerifyCode";
import ResetPassword from "./pages/Authentication/ResetPassword/ResetPassword";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./pages/ProdcutDetails/ProductDetails";

function App() {
  let { setIsUser } = useContext(UserContext);

  useEffect(() => {
    // if local storage not empty and it have token
    if (localStorage.getItem("userToken")) {
      setIsUser(localStorage.getItem("userToken"));
    }
  }, []);
  const routes = createHashRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/shop",
          element: (
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          ),
        },

        {
          path: "/contact",
          element: (
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: (
            <ProtectedRoute>
              <ErrorPage />
            </ProtectedRoute>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgetPassword", element: <ForgetPassword /> },
        { path: "/verify-code", element: <VerifyCode /> },
        { path: "/reset-password", element: <ResetPassword /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      {/* <BrowserRouter> */}
      {/* <Nav /> */}
      {/* <Routes> */}
      {/* to protect route when click on button check out in*/}
      {/* <Route
            path="/success"
            element={<ProtectRout elementProps={<SuccessOrder />} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
