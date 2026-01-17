import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mantine/core";
import CreateMeal from "../createMeal/CreateMeal";
import { Card, Image, Text, Badge, Group, Grid } from "@mantine/core";
import { AuthContext } from "../../context/AuthContext";

const ChiefBoard = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const setIsAuthenticated = useContext(AuthContext).setIsAuthenticated;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleAdd = (e) => {
    if (token) {
      if (e.currentTarget.id === "add") navigate("/createmeal");
      else if (e.currentTarget.id === "vital") navigate("/addvitals");
      else navigate("/summary");
    }
    console.dir(e.currentTarget);
    console.dir(e.target);
  };

  return (
    <Box mt="3%">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }} w="50%">
          <Card shadow="lg" padding="lg" radius="md">
            <Card.Section>
              <Image
                src="https://t4.ftcdn.net/jpg/01/87/86/01/360_F_187860162_hWCup6TWAbKwOzS3sKxkn2ZDZmGxZA47.jpg"
                height={160}
                alt="Sample image"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text fw={500}>Add your meal</Text>
              <Badge color="green"></Badge>
            </Group>
            <Text size="sm" c="dimmed">
              Adding your meal would be the first step for your sugar tracking
            </Text>
            <Button id="add" color="blue" onClick={handleAdd}>
              Add Meal
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} w="50%">
          <Card shadow="lg" padding="lg" radius="md" h="100%">
            <Card.Section>
              <Image
                src="https://health-e.in/wp-content/uploads/2023/03/7-Vital-Signs-to-Monitor-Regularly.webp"
                height={160}
                alt="Sample image"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text fw={500}>Add your vitals</Text>
              <Badge color="green"></Badge>
            </Group>
            <Text size="sm" c="dimmed">
              Next Step, add your vitals!
            </Text>
            <Button id="vital" color="blue" onClick={handleAdd}>
              Add Vitals
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12 }} mx="auto" my="auto">
          <Card shadow="lg" padding="lg" radius="md">
            <Card.Section>
              <Image
                src="https://img.freepik.com/free-photo/close-up-business-woman-analysis-process_23-2148411851.jpg?semt=ais_hybrid&w=740&q=80"
                height={160}
                alt="Sample image"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text fw={500}>Track your consumption</Text>
              <Badge color="green"></Badge>
            </Group>
            <Text size="sm" c="dimmed">
              let's See your sugar consumption report!
            </Text>
            <Button id="summary" color="blue" onClick={handleAdd}>
              Track Consumption
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
      <Button onClick={handleClick}>logout</Button>
    </Box>
  );
};
export default ChiefBoard;
