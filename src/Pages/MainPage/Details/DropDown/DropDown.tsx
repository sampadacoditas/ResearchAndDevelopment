import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import http from "../../../../Services/Services";
import { useContext, useState } from "react";
import { DetailsContext } from "../Details";

export default function BasicSelect() {
  let context: any = useContext(DetailsContext);
  const [field,setField]=useState()
  const [searchValue,setSearchValue]=useState()
  const [sort,setSort]=useState();

    React.useEffect(() => {
      async function getData()  {
        try{
            // http://localhost:4000/player/?sortBy=country&limit=1&page=1&field=${name}&searchValue=R   
        let data = await http.get(`player/?sortBy=country&limit=5&page=1&field=${field}&searchValue=${searchValue}`);
        console.log(data.data.result[0].users)
        context.setData(data.data.result[0].users)
        }
        catch(err:any)
        {
        //   dispatch({type:ACTION_TYPES.FETCH_ERROR})
         console.log(err)
        }
      }
      getData()
    },[field,searchValue]);
    console.log(field)
    console.log(searchValue)

  return (
    <>
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e:any)=>setSearchValue(e.target.value)}/>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={field}
        label="Age"
        onChange={(e:any)=>setField(e.target.value)}
        // onChange={handleChange}
      >
        <MenuItem value="None">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"name"}>Name</MenuItem>
        <MenuItem value={"country"}>Country</MenuItem>
        <MenuItem value={"totalScore"}>TotalScore</MenuItem>
        <MenuItem value={"type"}>Type</MenuItem>
      </Select>
    </div>
    </>
     
  );
}
