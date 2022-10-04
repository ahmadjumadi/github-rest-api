import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import { useGithub } from "../contexts/GithubProvider";
import { useEffect } from "react";
import githubInstance from "../apis/github";
import moment from "moment";


const ListRepositories = () => {

  const { repositories, setRepositories } = useGithub();
  
  useEffect(() => {
    const fetchedGithubRepositories = async () => {
      const { data } = await githubInstance.get("/user/repos");
      setRepositories(data);
    };
    fetchedGithubRepositories();
  }, []);

  return (
  // id, name, private, created_at, html_url
    <>
      <Box sx={{ border: "1px dashed gray", p:2, marginTop: 2 }}>
        <Typography variant="h5">List Repositori From Github</Typography>
        <Table
          sx={{
            minWidth: 768,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Create At</TableCell>
              <TableCell>Pindah Ke Repo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map((repository) => (
              <TableRow key={repository.id}>
                <TableCell>{repository.id}</TableCell>
                <TableCell>{repository.name}</TableCell>
                <TableCell>
                  {repository.private ? 'private' : 'public'}
                </TableCell>
                <TableCell>
                  {
                   moment(repository.created_at).format('DD - MMMM - YYYY HH:mm:ss')
                  }
                </TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={repository.html_url}
                  >
                    Click Me To Repo
                  </a>
                </TableCell>
              </TableRow>
            ))}
              
            
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default ListRepositories;
