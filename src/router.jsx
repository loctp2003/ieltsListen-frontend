import { Route, Routes } from "react-router-dom";
import {ROUTES} from "./utils/route"
import HomePage from "./component/users/HomePage/HomePage";
import Masterlayout from "./component/theme/masterLayout/Masterlayout";
const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTES.USER.HOME,
      component: <HomePage />,
    },
    
  ];

  return (
    <Masterlayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </Masterlayout>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
