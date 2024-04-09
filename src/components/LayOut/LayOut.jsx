import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Header";
import Footer from "../Footer/Footer";
import OffCanvasBasketCart from "../basket-products/OffCanvasBasket";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function LayOut() {
  return (
    <>
      <div
        className="min-h-[100vh] grid"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <Nav />
        <ProtectedRoute>
          <OffCanvasBasketCart />
        </ProtectedRoute>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
