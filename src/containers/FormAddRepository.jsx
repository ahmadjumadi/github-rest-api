import React, {useState} from "react";
import { Box, TextField, Select, FormControl, InputLabel, MenuItem, Button, Typography, Snackbar, } from "@mui/material";
import githubInstance from "../apis/github";
const FormAddRepository = () => {
  
  // name, private (boolean), gitignore template, licensse template => MIT License
  //gunakan state untuk menangkap value
  const [repoStatus, setRepoStatus] = useState(false);
  const [repoName, setRepoName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickway")
    {
      return;
    }
    
    setRepoName("");
    setOpen(false);
    setRepoStatus (false);
  };

  const selectOnChangeHandler = (e) => {
    setRepoStatus(e.target.value);
  };

  const textFieldOnChangeHandler = (e) => { 
    setRepoName(e.target.value);
  };

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(repoName, repoStatus);

    const { data } = await githubInstance.post("/user/repos",{
      name: repoName,
      private: repoStatus,
      gitignore_template: "Node",
      licensse_tempplate: "mit",
    });

    console.log(data);
    handleClick();
  };

  return (    
    <>
      <Box sx={{ 
        border: '1px dashed gray',
        p: 2,
        marginTop: '2',
       }}>
        <Typography variant="h5">Tambah Repository</Typography>
        <form onSubmit={formOnSubmitHandler}>
        <FormControl 
          fullWidth={true} 
          sx={{ 
            marginTop: '1em', 
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5em',
        }}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            label="Status"
            value={repoStatus}
            onChange={selectOnChangeHandler}            
          >
            <MenuItem value={true}>Public</MenuItem>
            <MenuItem value={false}>Private</MenuItem>
          </Select>
          <TextField 
            fullWidth
            label="Nama repository"
            value={repoName}
            onChange={textFieldOnChangeHandler}
          />
          <Button variant="contained" size="large" type="submit">SUBMIT</Button>
        </FormControl>
        </form>
        <Snackbar  
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={"Repo baru terbuat"}
        />
      </Box>
    </>
  );
};

export default FormAddRepository;
