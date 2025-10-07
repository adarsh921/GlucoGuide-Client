import { Paper } from "@mantine/core";
const BreakFast = ({ meals }) => {
  console.log(meals);

  return (
    <Paper style={{ padding: "5%" }} shadow="sm">
      <h2 style={{ marginTop: "0" }}>BreakFast</h2>
      <ul>
        {meals.map((meal) => {
           return <li>{`${meal}`}</li>;
        })}
      </ul>
    </Paper>
  );
};
export default BreakFast;
