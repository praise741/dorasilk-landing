import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Outlet } from "react-router";

const LandingSharedLayout = () => {

  return (
    <div className="">
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default LandingSharedLayout;
