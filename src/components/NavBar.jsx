import React from "react";
import { Link } from "react-router-dom";
import  { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{ 
          display: 'flex',
          gap: '0.5em',
          border: '1px dashed gray',
          p: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography>Github Project</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
          }}
        >
          <Link to="/list">
            <Typography variant="body2">List</Typography>
          </Link>
          <Link to="/add">
            <Typography variant="body2">Add</Typography>
          </Link>
        </Box>
      </Box>
    </>
    );
};

export default NavBar;