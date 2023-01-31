import  React from "react"
import ResetComponent from "../components/ResetComponent/ResetComponent";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import { Login } from "../Pages/Login/Login";
import { Details } from "../Pages/MainPage/Details/Details";
import  {MainPage}  from "../Pages/MainPage/MainPage";
// import MainPage from "../Pages/MainPage/MainPage";
import { Reports } from "../Pages/MainPage/Reports/Reports";
import { PageNotFound } from "../Pages/PageNotFound/PageNotFound";
// import { Reports } from "../Pages/MainPage/Reports/Reports";
// import LazyAbout=React.lazy(()=>import("../Pages/MainPage/MainPage"))
export const RoutesData = [
  {
    path: "/",
    component: Login,
  },
  {
   path:"/forgotPassword",
   component:ForgotPassword
  },
  {
    path:'/*',
    component: PageNotFound
  },
  {
    path:'/resetPassword',
    component:ResetComponent
  },

  {
    path: "/mainPage",
    component: MainPage,
    children: [
      {
        path: "details",
        component: Details,
      },
      {
        path: "reports",
        component: Reports,

      }
    ],
  },
];
