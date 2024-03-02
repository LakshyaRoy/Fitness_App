import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span
          style={{
            color: "#CC3D3D",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        flexWrap={"wrap"}
        pt={"20px"}
      >
        {exerciseVideo?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              margin: "0 auto",
              width: "300px",
            }}
            className="youtube-video-card"
          >
            <img
              style={{
                width: "300px",
                height: "200px",
              }}
              src={item?.video?.thumbnails[0]?.url}
              alt={item?.video?.title}
              loading="lazy"
            />
            <Box p="10px">
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color="#000"
                sx={{
                  fontSize: { lg: "15px", xs: "12px" },
                  wordBreak: "break-all",
                  textTransform: "capitalize",
                  marginTop: "10px",
                }}
              >
                {item?.video?.title}
              </Typography>
              <Typography fontSize={"14px"} variant="h6" color="#777777">
                {item?.video?.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
