import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const AllAdmins = () => {

    // function createData(name, email, reports, productId) {
    //     // const density = population / size;
    //     return { name, email, reports, productId };
    // }

    const rows = [
        // createData('India', 'IN', 1324171354, 3287263),
        // createData('China', 'CN', 1403500365, 9596961),
        // createData('Italy', 'IT', 60483973, 301340),
        // createData('United States', 'US', 327167434, 9833520),
        // createData('Canada', 'CA', 37602103, 9984670),
        // createData('Australia', 'AU', 25475400, 7692024),
        // createData('Germany', 'DE', 83019200, 357578),
        // createData('Ireland', 'IE', 4857000, 70273),
        // createData('Mexico', 'MX', 126577691, 1972550),
        // createData('Japan', 'JP', 126317000, 377973),
        // createData('France', 'FR', 67022000, 640679),
        // createData('United Kingdom', 'GB', 67545757, 242495),
        // createData('Russia', 'RU', 146793744, 17098246),
        // createData('Nigeria', 'NG', 200962417, 923768),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        // createData('Brazil', 'BR', 210147125, 8515767),
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ];

    // handle pagination starts here
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // handle pagination ends here

    const handleRemoveAdmin = () => {

        window.location.reload();
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography
                sx={{
                    fontWeight: '600',
                    color: '#3d97eb',
                    my: 3
                }}
                variant="h5">
                All Admins appear here
            </Typography>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="Reports table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    fontWeight: '900',
                                    fontSize: 'large',
                                    color: '#3d97eb'
                                }} align="center">Name</TableCell>
                            <TableCell
                                sx={{
                                    fontWeight: '900',
                                    fontSize: 'large',
                                    color: '#3d97eb'
                                }} align="center">Email</TableCell>
                            <TableCell
                                sx={{
                                    fontWeight: '900',
                                    fontSize: 'large',
                                    minWidth: 170,
                                    color: '#3d97eb'
                                }} align="center">Password</TableCell>
                            <TableCell
                                sx={{
                                    fontWeight: '900',
                                    fontSize: 'large',
                                    color: '#3d97eb'
                                }} align="center">Remove Admin</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {row}
                                    </TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        {row.serviceName}
                                    </TableCell>
                                    <TableCell align="center">{row.time}</TableCell>
                                    <TableCell sx={{
                                        minWidth: 170
                                    }} align="center">
                                        <Button
                                            onClick={handleRemoveAdmin}
                                            sx={{ backgroundColor: 'red' }}
                                            variant="contained">Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default AllAdmins;