import {Avatar} from "@mui/material";
import Aboutme from "./component/About/Aboutme";
import { useState } from "react";


function App() {
  const [lang, setLang] = useState("ru");

  return (
    <>
        <Headers lan={lang} />
        <select>
          <option></option>
        </select>
        <Aboutme />

    </>
  )
}

export default App
