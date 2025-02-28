interface LoginI {
    Template: (props: { children: JSX.Element }) => JSX.Element;
}

const Login = ({ Template }: LoginI) => {
    return (
        <Template>
            <div>Login</div>
        </Template>
    );
};

export default Login;
