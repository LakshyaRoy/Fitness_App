import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ExecrcisesCard = ({ exercise }) => {
  // console.log(exercise);
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontSize: { lg: "14px", xs: "12px" },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontSize: { lg: "14px", xs: "12px" },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt={"11px"}
        pb="10px"
        fontSize={{ lg: "22px", xs: "18px" }}
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExecrcisesCard;

ExecrcisesCard.propTypes = {
  exercise: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
  ]),
};
