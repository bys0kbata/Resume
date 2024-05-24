import {Box, Grid, Switch, Typography} from "@mui/material";
import Headers from "./component/headers/Headers.jsx";
import {useState} from "react";
import {getInfo} from "./hook/useInfo.js";
import LeftCompany from "./component/LeftCompany/LeftCompany.jsx";
import MiddleCompany from "./component/MiddleCompany/MiddleCompany.jsx";
import RightCompany from "./component/RightCompany/RightCompany.jsx";
import "./App.css"


function App() {
  const [ling, setLing] = useState("rus");
  const [state, setState] = useState(true);

  //const onLingChange = (e) => {
  //  e.preventDefault();
   // setState(!state);
  //  if(!state) {setLing("eng")}
  //  if(state) {setLing("eng")}
   // getInfo(ling);
 // }
  return (
    <>
      <Headers lang={ling} />
      <Box className="Body" >
        <LeftCompany />
        <MiddleCompany />
        <RightCompany />
      </Box>
    </>
  )
}

export default App
