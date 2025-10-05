import { Paper, Text } from "@mantine/core";
import api from "../src/api/axios";
import { useState, useEffect } from "react";
import BreakFast from "./BreakFast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

const TodaySugarDisplay = () => {
  const [todayMeals, setTodayMeals] = useState([]);
  const [todaysSugar, setTodaysSugar] = useState(null);

  // NOT A GOOD HABIT TO CREATE A NEW EMPTY ARRAY ON EVERY RENDER
  // const breakfastmeals = [];
  // const lunchmeals = [];
  // const dinnermeals = [];

  const breakfastmeals = todayMeals
    .filter((meal) => meal.mealTime === "Breakfast")
    .map((meal) => meal.foodName);

  const lunchmeals = todayMeals
    .filter((meal) => meal.mealTime === "Lunch")
    .map((meal) => meal.foodName);
    
  const dinnermeals = todayMeals
    .filter((meal) => meal.mealTime === "Dinner")
    .map((meal) => meal.foodName);

  console.log(todaysSugar);
  console.log(todayMeals);

  useEffect(() => {
    const fetchSugarData = async () => {
      try {
        const response = await api.get("/api/meals/today");
        console.log("ye walla", response.data);
        setTodayMeals(response.data.meals);
        setTodaysSugar(response.data.totalSugar);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSugarData();
  }, []);
  return (
    <Paper>
      <BreakFast meals={breakfastmeals} />
      <Lunch meals={lunchmeals} />
      <Dinner meals={dinnermeals} />
    </Paper>
  );
};

export default TodaySugarDisplay;
