import { Box, Card } from "@mui/material";
import { CustomTemplateProps } from "../types/template";

const CustomTemplate = (props: CustomTemplateProps) => {
    const { children } = props;
    // const { realm } = kcContext;

    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            <Card>{children}</Card>
        </Box>
    );
};

export default CustomTemplate;
