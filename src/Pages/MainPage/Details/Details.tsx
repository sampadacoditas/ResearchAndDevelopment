import React, { createContext, useEffect, useReducer, useState } from "react";
import CustomizedTables from "./Table/Table";
import styles from "./Details.module.scss";
import http from "../../../Services/Services";
import { INITIAL_STATE, Reducer, ACTION_TYPES } from "../Reducer/Reducer";
import { Datagrid } from "./DataGrid/Datagrid";
import BasicSelect from "./DropDown/DropDown";
import { TextField } from "@mui/material";
// import {SortDropDown}from "./SortDropDown/SortDropDown"
export const DetailsContext = createContext({});

export const Details = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [data, setData] = useState<any>();

  return (
    <>
      <DetailsContext.Provider value={{ state, dispatch,setData,data}}>
        
        <div className={styles.customer}>
          <div className={styles.select}>
           <span><BasicSelect/></span>

            {/* <span><SortDropDown/></span> */}
          </div>
          <CustomizedTables />
        </div>
        <div className={styles.pagination}></div>
      </DetailsContext.Provider>
    </>
  );
};
