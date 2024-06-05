import {Box, Typography} from "@mui/material";

export default function LeftCompany() {
    return(
        <Box sx={{
            marginLeft:"8vh"

        }}>
            <Box className="CaseBox">
                <Typography>Ключевые навыки</Typography>
                <Box className="CaseBox">
                    <Typography>Frontend</Typography>
                </Box>
                <Box className="CaseBox">
                    <Typography>DevOps</Typography>
                </Box>
                <Box className="CaseBox">
                    <Typography>Soft Skills</Typography>
                </Box>
            </Box>
        </Box>
    )
}