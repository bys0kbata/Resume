import {Box, Typography} from "@mui/material";

export default function MiddleCompany() {
    return(
        <Box className="CaseBox">
            <Box className="AbouteBox">
                <Typography className="AboutText">Образование</Typography>
            </Box>
            <Box className="AbouteBox">
                <Typography className="AboutText">Курсы повышения квалификации</Typography>

            </Box>
            <Box className="AbouteBox">
                <Typography className="AboutText">О себе</Typography>
            </Box>
        </Box>
    )
}