import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import react,{useState} from 'react'

 const Add = () => {

    const [form,setForm]= useState(
      {
        pname:"",
        pdesc:"",
        pprice:"",
        pcategory:""
      }
    )

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  let valueAdd=()=>{
    console.log(form)
  }

  return (
    <>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: 'w#272727', 
        p: 2,  
        borderRadius: 1,  
        boxShadow: 1, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" 
            label="Product Name" 
            variant="outlined" 
            name="pname"
            InputLabelProps={{ style: { color: 'grey' } }} 
            InputProps={{ style: { color: 'white' } }}
            onChange={valueCap}
            />
            <br/>

            <TextField id="outlined-basic" 
            label="Product Description" 
            variant="outlined" 
            name="pdesc"
            InputLabelProps={{ style: { color: 'grey' } }} 
            InputProps={{ style: { color: 'white' } }}
            onChange={valueCap}
            />
            <br/>

            <TextField
            id="outlined-basic"
            label="Price"
            name="pprice"
            type="basic"
            InputLabelProps={{ style: { color: 'grey' } }}
            InputProps={{
              style: { color: 'white' },
              
            }}            
          variant="filled"
          onChange={valueCap}
        />
        <br/>
      <TextField id="outlined-basic" 
            label="Category" 
            variant="outlined" 
            name="pcategory"
            InputLabelProps={{ style: { color: 'grey' } }}
            InputProps={{ style: { color: 'white' } }}
            onChange={valueCap}
            />

        
      
      <Stack spacing={3} direction="row" justifyContent = "center">
      <br/>
      <Button variant="outlined" color="success" onClick={valueAdd} >Submit</Button>
      <br/>
      {/* <large>count is {count}</large> */}
    </Stack>
    </Box>
    </>
  )
}

export default Add
