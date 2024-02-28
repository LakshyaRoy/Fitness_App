import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { end } from "@popperjs/core";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import PropTypes from "prop-types";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // console.log(bodyPart);
  const [Search, setSearch] = useState("");
  const [BodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const BodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...BodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (Search) {
      const exercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExecrises = exercises.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(Search) ||
          exercise.target.toLowerCase().includes(Search) ||
          exercise.equipment.toLowerCase().includes(Search) ||
          exercise.bodyPart.toLowerCase().includes(Search)
        );
      });
      // console.log("searchedExecrises", searchedExecrises);

      setSearch("");
      setExercises(searchedExecrises);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" p="20px" justifyContent={"center"}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        variant="h6"
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position={"relative"}
        mb={"72px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={end}
      >
        <TextField
          height="76px"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // Fix this line
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              ":focus": {
                border: "none",
                outline: "none",
              },
              ":hover": {
                border: "none",
              },
            },
            width: {
              lg: "800px",
              md: "650px",
              xs: "350px",
            },
            backgroundColor: "#fff", // Fix the background color
            borderRadius: "40px",
          }}
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#C62828",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={Array.isArray(BodyParts) ? BodyParts : []}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

// Update SearchExercises.propTypes
SearchExercises.propTypes = {
  setExercises: PropTypes.func,
  bodyPart: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  setBodyPart: PropTypes.func,
  data: PropTypes.array,
};
