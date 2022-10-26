import React from 'react';
import "./Table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1,
            product: "Cao Nguyen",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 2,
            product: "Anh Quan",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 3,
            product: "Cam Duyen",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Pending",
        },
        {
            id: 4,
            product: "Trang Huong",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 5,
            product: "Duc Manh",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 6,
            product: "My Han",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 7,
            product: "Khuong Ly",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 8,
            product: "Nhay Tu",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 9,
            product: "Cao Y",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
        {
            id: 10,
            product: "Cao Tuyet",
            img: "asd",
            customer: "skad",
            amount: 80000,
            status: "Approved",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Image</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell className='tableCell'>{row.product}</TableCell>
                            <TableCell className='tableCell'>{row.img}</TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List
