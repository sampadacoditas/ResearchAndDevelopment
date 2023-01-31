import { Button } from "@mui/material";
import { Component, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "../../components/Header/Header";
// import EnableColorOnDarkAppBar from "../../Components/Header/Header";
// import KeepMountedModal from "../../Components/Modal/Modal";
import http from "../../Services/Services";
import styles from "./MainPage.module.scss";
import SideBar from "./SideBar/SideBar";
// import AdminSideBar from "./AdminSideBar/AdminSideBar";
// import AddUser from "./Agent/AddUser/AddUser";
// import Agent from "./Agent/Agent";
// import Customers from "./Customer/Customer";




export const MainPage = () => {
  return (
    <>
      <div className={styles.admin}>
        <ButtonAppBar/>
        <div className={styles.sideBarButtons}>
          <ul className={styles.unorderedList}>
            <div className={styles.Link}>
              <SideBar />
            </div>
          </ul>
        </div>
        <main className={styles.main}>
          <Outlet/>
        </main>
      </div>
    </>
  );
};

// export default MainPage