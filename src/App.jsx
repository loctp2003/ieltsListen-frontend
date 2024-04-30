import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./component/theme/header/Header";
import HomePage from "./component/users/HomePage/HomePage";
import CourseList from "./component/users/Course/CourseList";
import LandingPageLayout from "./component/layouts/LandingPageLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/course",
        element: <CourseList />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
