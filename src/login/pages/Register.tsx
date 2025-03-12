import { Button, CardContent, Grid2 as Grid, TextField } from "@mui/material";
import { LoginPageProps } from "../../types/template";

const Register = (props: LoginPageProps<"register.ftl">) => {
    const { Template, kcContent, i18n } = props;
    const { msgStr } = i18n;
    const { realm, url, messagesPerField } = kcContent;
    const { registrationEmailAsUsername } = realm;

    return (
        <Template kcContext={kcContent} i18n={i18n}>
            <CardContent>
                <form action={url.loginAction} method="post">
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                name="username"
                                label={registrationEmailAsUsername ? msgStr("username") : msgStr("username")}
                                error={messagesPerField.existsError("username")}
                                helperText={messagesPerField.getFirstError("username")}
                            ></TextField>
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                name="password"
                                type="password"
                                label={msgStr("password")}
                                error={messagesPerField.existsError("password")}
                                helperText={messagesPerField.getFirstError("password")}
                            ></TextField>
                        </Grid>
                        <Grid size={12}>
                            <Button type="submit">{msgStr("doLogIn")}</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Template>
    );
};

export default Register;
