import { Box, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p={"20px"}
    >
      <Typography color="#C62828" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        Repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        CheckOut the Most Effective Exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{
          backgroundColor: "#C62828",
          padding: "10px",
          ":hover": { opacity: 0.9 },
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#C62828"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        mt={3}
      >
        Excercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
