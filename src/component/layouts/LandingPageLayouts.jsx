import { Outlet } from "react-router";
import Header from "../theme/header/Header";

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPageLayout;
