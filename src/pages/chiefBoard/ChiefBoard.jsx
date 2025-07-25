import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import CreateMeal from "../createMeal/CreateMeal";

const ChiefBoard = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAdd = (e) => {
    if (token) {
      if (e.target.id === "add") navigate("/createmeal");
      else if (e.target.id === "vital") navigate("/addvitals");
      else navigate("/summary");
    }
    console.log(e);
  };

  return (
    <div>
      <h1>CHIEF_BOARD</h1>
      <h2>{`Hi!, ${username}`}</h2>

      <div onClick={handleAdd} id="add">
        ADD FOOD
      </div>
      <div id="vital" onClick={handleAdd}>
        ADD VITALS
      </div>
      <div id="summary" onClick={handleAdd}>
        TRACK CONSUMPTION
      </div>
      <Button onClick={handleClick}>logout</Button>
    </div>
  );
};
export default ChiefBoard;
