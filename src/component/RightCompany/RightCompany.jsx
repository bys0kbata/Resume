import {Box, Typography} from "@mui/material";

export default function RightCompany() {
    return(
        <Box sx={{
            marginRight:"8vh"

        }}>
            <Box className="CaseBox">
                <Typography className="MainText">Специализация</Typography>
            </Box>
            <Box className="CaseBox">
                <Typography className="MainText">Портфолио</Typography>

            </Box>
        </Box>
    )
}