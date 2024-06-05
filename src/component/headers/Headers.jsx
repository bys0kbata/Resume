import {Avatar, Typography} from "@mui/material";
import "./Headers.css"
import {getInfo} from "../../hook/useInfo.js";

export default function Headers(props){
    // eslint-disable-next-line react/prop-types

    const data = getInfo(props.lang);

    return(
        <div className="headers">
            <Avatar
            alt="Remy Sharp"
            className="Avatar"
            src="/public/cyh0lQzQfc4.jpg"
            sx={{ width: "20vh",
                height: "20vh" }}
            />
            <div>
                <Typography
                    sx={{
                        marginBottom: "4vh",
                        color:"white",
                        fontFamily: 'Jura, sans-serif',
                        fontSize: '3.5vh',
                    }}
                    className="textFIO"> {data.FIO}</Typography>
                <Typography
                    sx={{
                        textAlign:"center",
                        padding: "0",
                        color:"#DF4949",
                        fontFamily: 'Jura, sans-serif',
                        fontSize: '2.5vh',
                        borderStyle:'solid',
                        borderColor: `#DF4949`,
                        borderRadius:"18px"
                    }}
                    className="textFIO"> {data.Jobs}</Typography>
            </div>
        </div>
    )
}