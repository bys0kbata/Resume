import {Box, Typography} from "@mui/material";

export default function LeftCompany() {
    return(
        <Box sx={{
            marginLeft:"8vh"

        }}>
            <Box className="CaseBox">
                <Typography className="MainText"> Ключевые навыки</Typography>
                <Box className="CaseBox">
                    <Typography className="AddText">Frontend</Typography>
                </Box>
                <Box className="CaseBox">
                    <Typography className="AddText">DevOps</Typography>
                </Box>
                <Box className="CaseBox">
                    <Typography className="AddText">Soft Skills</Typography>
                </Box>
            </Box>
        </Box>
    )
}