import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ ml: { lg: "100px", xs: "20px" } }}>
      <Typography variant="h3" mb={5}>
        Execrises that target the same muscle group
      </Typography>
      <Stack
        direction={"row"}
        sx={{ p: "2", position: "relative" }}
        gap={"40px"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Execrises that use the same equipment
      </Typography>
      <Stack
        direction={"row"}
        sx={{ p: "2", position: "relative" }}
        gap={"40px"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {equipmentExercises?.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
