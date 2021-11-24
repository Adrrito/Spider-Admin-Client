import React, { useState } from 'react';
import { Box, TextField, Container, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const history = useHistory();

    const handleOnBlur = e => {
        // const email = e.target.value;
        // console.log(email);
        // get email and password by a single function
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        history.push('/dashboard');
    }

    return (
        <div>
            <Container>
                <Typography variant="h5" sx={{ fontWeight: '500', color: "#3d97eb", mt: 15, mb: 5 }}>
                    Please Login
                </Typography>
                <form >
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        label="Admin Email"
                        name="email"
                        onBlur={handleOnBlur}
                        type="email"
                        required
                    />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        label="Admin Password"
                        name="password"
                        onBlur={handleOnBlur}
                        type="password"
                        required
                    />
                    <Box>
                        <Button
                            onClick={handleLoginSubmit}
                            sx={{
                                width: '150px',
                                mt: 5,
                                backgroundColor: '#3d97eb'
                            }}
                            variant="contained"
                            type="submit"
                        >Login</Button>
                    </Box>
                </form>
            </Container>
        </div>
    );
};

export default Login;