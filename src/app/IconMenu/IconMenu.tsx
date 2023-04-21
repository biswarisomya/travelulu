"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import Link from "next/link";
const IconMenu = () => {
  return (
    <div className="z-1 absolute flex  flex-col bg-[#2A00A2] text-white group-hover:block ">
      <Link href="/">Home</Link>
      <Link href="/hotels">Hotels</Link>
    </div>
    // <Paper
    //   sx={{
    //     width: 320,
    //     maxWidth: "100% z-1 absolute flex   group-hover:block ",
    //   }}
    // >
    //   <MenuList className=" bg-[#2A00A2]">
    //     <MenuItem>
    //       <ListItemText>
    //         <Link className="text-white" href="/">
    //           Home
    //         </Link>
    //       </ListItemText>
    //     </MenuItem>
    //     <MenuItem>
    //       <ListItemText>
    //         <Link className="text-white" href="/hotels">
    //           Hotels
    //         </Link>
    //       </ListItemText>
    //     </MenuItem>
    //   </MenuList>
    // </Paper>
  );
};

export default IconMenu;
