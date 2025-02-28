import { Box, Card } from "@mui/material";

export interface LoginTemplateI {
    children: JSX.Element;
}

const LoginTemplate = ({ children }: LoginTemplateI) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            <Card>{children}</Card>
        </Box>
    );
};

export default LoginTemplate;
