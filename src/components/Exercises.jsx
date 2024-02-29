import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExecrcisesCard from "./ExecrcisesCard";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  // console.log(exercises);

  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  const indexLastExercises = currentPage * exercisesPerPage;
  const indexFirstExercises = indexLastExercises - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexFirstExercises,
    indexLastExercises
  );
  // console.log(currentExercises);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let execrisesData = [];
      if (bodyPart === "all") {
        execrisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        execrisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(execrisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, i) => (
          <ExecrcisesCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={{ lg: "114px", xs: "70px" }} alignItems="center">
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / 9)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Exercises;
