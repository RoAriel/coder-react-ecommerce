import './BuyDetail.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export function BuyDetail({ order }) {
    return (
        <section className='dt-container'>
            <h4 className='center'>Buy Detail</h4>
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className='dt-cell' align="left">Item</TableCell>
                        <TableCell className='dt-cell' align="right">Price</TableCell>
                        <TableCell className='dt-cell' align="right">Quantity</TableCell>
                        <TableCell className='dt-cell' align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {order.items.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell className='dt-cell' >{item.name}</TableCell>
                            <TableCell className='dt-cell' align="right">{item.price}</TableCell>
                            <TableCell className='dt-cell' align="right">{item.count}</TableCell>
                            <TableCell className='dt-cell' align="right">$ {item.price * item.count}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                    <TableCell className='dt-cell'/>
                    <TableCell className='dt-cell'/>
                        <TableCell className='dt-cell' align="right" >Total Price: </TableCell>
                        <TableCell className='dt-cell' align="right">$ {order.total}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <dir className='dt-end'></dir>
        <Link to="/">
                <button className='bt-home'> Go home and buy more!</button>
            </Link>
        </section>
    )
}