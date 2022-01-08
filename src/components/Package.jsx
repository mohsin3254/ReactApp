import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { Link, Links } from "react-router-dom";
const Package = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };
  return (
    <div>
      <Table style={{ width: "70%", margin: "30px auto" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#ff4757" }}>
            <TableCell>Name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  style={{ margin: "4px" }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button variant="outlined">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Package;
