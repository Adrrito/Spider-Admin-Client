import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const AddAdmin = () => {
    const [newAdminData, setNewAdminData] = useState();

    const handleOnBlur = e => {
        // const email = e.target.value;
        // console.log(email);
        // get email and password by a single function
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...newAdminData };
        newLoginData[field] = value;
        setNewAdminData(newLoginData);
        console.log(newLoginData);
    }

    const handleAddAdmin = () => {
        alert('Admin added successfully');
    }

    return (
        <Container>
            <Typography variant="h5" sx={{ fontWeight: '500', color: "#3d97eb", mt: 15, mb: 5 }}>
                Please Add an Admin
            </Typography>
            <form >
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    label="Admin Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    required
                />
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    label="Admin Password"
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    required
                />
                <Box>
                    <Button
                        onClick={handleAddAdmin}
                        sx={{
                            width: '150px',
                            mt: 5,
                            backgroundColor: '#3d97eb'
                        }}
                        variant="contained"
                        type="submit"
                    >Add Admin</Button>
                </Box>
            </form>
        </Container>
    );
};

export default AddAdmin;