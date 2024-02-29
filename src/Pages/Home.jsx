import { Box } from "@mui/material";
import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import PropTypes from "prop-types";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  console.log("bodyPart", bodyPart);

  const [exercises, setExercises] = useState([]);
  // console.log("exercises", exercises);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart || ""}
        setBodyPart={setBodyPart}
      />

      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;

Home.propTypes = {
  setExercises: PropTypes.array,
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
};
