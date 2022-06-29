import React from "react";
import {Typography, Button, TextField, MenuItem, Select} from '@mui/material'

const createFile = () => {

    return(
        <div style = {{width: '50%', height: '50%'}}> 

            <Select value={"File"} label="Create new type">
                <MenuItem value = {"Folder"}>Folder</MenuItem>

                <MenuItem value = {"File"}>File</MenuItem>   

                <MenuItem value = {"Symlink"}>Symlink</MenuItem>



            </Select>


            



        </div>
        





    )


}

export default createFile;