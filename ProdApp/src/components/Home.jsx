import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import {useState, useEffect} from 'react';
import axios from 'axios';

//   const rows = [
//     {
//         title:"Airpods pro",
//         price:"25000",
//         category:"headphones",
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1694014871985"
//     },

//     {
//         title:"iPhone 15 Pro",
//         price:"125000",
//         category:"Mobiles",
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-family-select?wid=4000&hei=3794&fmt=jpeg&qlt=90&.v=1692893974945"
//     },
    
//   ];
  
const Home = () => {

    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log(res)
        setRows(res.data)
      })
    },[])

  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Title</TableCell>
            <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Price</TableCell>
            <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Category</TableCell>
            <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
              {row.title}
            </TableCell>
            
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.price}</TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.category}</TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}><img src={row.image} alt={`${row.title} poster`} style={{ maxWidth: '100px' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Home
