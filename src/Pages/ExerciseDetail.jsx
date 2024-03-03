import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, YoutubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetail = () => {
  const [exercisesDeatil, setExercisesDeatil] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      // if (!exerciseVideo.length) return "Loading...";

      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      //  exerciseDeatils fetch api
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDeatil(exerciseDetailData);

      // exerciseVideos fetch api
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`,
        YoutubeOptions
      );
      setExerciseVideo(exerciseVideosData);
      // targetExercises fetch api
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      // equipmentExercises fetch api
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  // console.log(exerciseVideo);

  return (
    <Box>
      <Detail exercisesDeatil={exercisesDeatil} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo?.contents}
        name={exercisesDeatil?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
