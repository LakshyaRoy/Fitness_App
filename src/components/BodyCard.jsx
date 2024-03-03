import React, { useRef } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import PropTypes from "prop-types";
const BodyCard = ({ item, setBodyPart, bodyPart }) => {
  const myRef = useRef();
  // console.log("bodyPart", bodyPart);
  // console.log("item", item);
  return (
    <Stack
      ref={myRef}
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3A1212",
          textTransform: "uppercase",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyCard;

BodyCard.propTypes = {
  item: PropTypes.string,
  bodyPart: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  setBodyPart: PropTypes.func,
};
