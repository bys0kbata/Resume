import {Box, Typography} from "@mui/material";

export default function RightCompany() {
    return(
        <Box sx={{
            marginRight:"8vh"

        }}>
            <Box className="CaseBox">
                <Typography>Специализация</Typography>
            </Box>
            <Box className="CaseBox">
                <Typography>Портфолио</Typography>

            </Box>
        </Box>
    )
}