import React, {useState} from "react";
import {Typography, Button, TextField, MenuItem, Select} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import { Helmet } from "react-helmet"

const CreateFile = () => {

    const [file, setFile] = useState("File")

    function handleChange(event: SelectChangeEvent){



    }



    return(
        <div style = {{width: '50%', height: '50%', border: '6px blue solid', display:'flex',justifyContent:'center', alignItems:'center'}}> 


            
      <Helmet>
        <style>{"body { background-color: floralWhite; }"}</style>

        
      </Helmet>

            <Select value={file} style={{width:'20%', color:"black"}} onChange={handleChange}>


                <MenuItem value = {"Folder"}>Folder</MenuItem>

                <MenuItem value = {"File"}>File</MenuItem>   


                

                <MenuItem value = {"Symlink"}>Symlink</MenuItem>



            </Select>


            



        </div>
        





    )


}

export default CreateFile;