import React from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Fade, Box, Typography, Grid, Button } from '@mui/material';
import AboutProduct from '../ModalCard/AboutProduct';
import AboutShop from '../ModalCard/AboutShop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    // height: '1000px',
    // overFlow: 'hidden',
    bgcolor: 'background.paper',
    border: '1px solid blue',
    borderRadius: '10px',
    boxShadow: 24,
    p: 5
};

const ReportsModal = ({ openModal, handleCloseModal }) => {
    const aboutProduct = {
        name: 'Mango juice',
        price: 5
    }
    const aboutShop = {
        name: 'Adi Store',
        place: 'Muktagachha'
    }

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Show users report
                        </Typography>
                        <br />
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <AboutProduct aboutProduct={aboutProduct}></AboutProduct>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AboutShop aboutShop={aboutShop}></AboutShop>
                                </Grid>
                            </Grid>

                        </Box>

                        <Grid
                            sx={{
                                textAlign: 'left'
                            }}
                            container spacing={3}>
                            <Grid item xs={4} sm={4}>
                                <Button
                                    sx={{
                                        backgroundColor: 'red',
                                        width: '200px'
                                    }}
                                    variant="contained">Block Product</Button>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Button
                                    sx={{
                                        backgroundColor: 'red',
                                        width: '200px'
                                    }}
                                    variant="contained">Block User</Button>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Button
                                    sx={{
                                        backgroundColor: 'red',
                                        width: '200px'
                                    }}
                                    variant="contained">Unblock Product</Button>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Button
                                    sx={{
                                        backgroundColor: 'red',
                                        width: '200px'
                                    }}
                                    variant="contained">Unblock user</Button>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Button
                                    sx={{
                                        backgroundColor: 'red',
                                        width: '200px'
                                    }}
                                    variant="contained">Warn user</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default ReportsModal;