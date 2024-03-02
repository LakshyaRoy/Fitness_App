import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exercisesDeatil }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exercisesDeatil;
  console.log(instructions);
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  // console.log(exercisesDeatil);
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "start",
      }}
    >
      <img
        src={`${gifUrl}`}
        alt={name}
        loading="lazy"
        className="detail-image"
      />
      <Stack
        direction={"column"}
        justifyContent={"space-around"}
        sx={{ gap: { lg: "35px", xs: "20px" } }}
      >
        <Typography variant="h3" textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: "22px", xs: "18px" } }} variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            {name}
          </span>{" "}
          is one of the best exercises to target your{" "}
          <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            {target}
          </span>
          . It will help you improve your mood and gain energy.
        </Typography>

        <Typography variant="h4" textTransform={"capitalize"}>
          instructions
        </Typography>

        {instructions?.map((item, index) => (
          <Typography
            key={index}
            sx={{ fontSize: { lg: "22px", xs: "16px" } }}
            variant="h6"
          >
            <span style={{ fontWeight: "bold" }}>{index + 1}.</span> {item}
          </Typography>
        ))}

        {extraDetail?.map((item, i) => (
          <Stack
            key={i}
            direction={"row"}
            gap={"24px"}
            sx={{ alignItems: "center" }}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item?.icon}
                alt={bodyPart}
                style={{ width: "48px", height: "48px" }}
              />
            </Button>
            <Typography variant="h5" textTransform={"capitalize"}>
              {item?.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
