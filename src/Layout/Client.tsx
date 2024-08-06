import { Outlet } from "react-router-dom";
import Footer from "../components/Client/Footer";
import Header from "../components/Client/Header";

const Client = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Client;
