import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        alignItems="start"
        px="40px"
        py="24px"
        justifyContent={"center"}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <img src={Logo} alt="logo" width="auto" height="40px" />
        <Typography variant="h5" textAlign={"center"}>
          Elevate Your Workout Experience with GYM-APP💪🏽 © 2024 GYM-APP. All
          Rights Reserved 😁
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
