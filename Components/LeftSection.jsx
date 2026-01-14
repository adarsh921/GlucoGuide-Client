import {
  Card,
  Group,
  Stack,
  Title,
  Text,
  AspectRatio,
  GridCol,
} from "@mantine/core";
import { Grid } from "@mantine/core";
import api from "../src/api/axios";
import { useEffect, useState } from "react";
const LeftSection = () => {
  const [totalSugar, setTotalSugar] = useState(0);
  const [mealsLogged, setMealsLogged] = useState(0);

  useEffect(() => {
    const todayMeals = async () => {
      const response = await api.get("/api/meals/today");
      console.log(response);
      setTotalSugar(response.data.totalSugar);
      setMealsLogged(response.data.meals.length);
    };
    todayMeals();
  }, []);

  return (
    //note-> grid : controls width
    //aspectRatio : calculates height based on width
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Card shadow="md" padding="lg" radius="md">
            <Group justify="center">
              <Text fw={500} size="xs" ta="center">
                Total Sugar Consumed
              </Text>
            </Group>
            <Group justify="center" size="xl">
              <Stack>{`${totalSugar}g`}</Stack>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Card shadow="md" padding="lg" radius="md" mih={99}>
            <Group justify="center">
              <Text fw={500} size="xs" ta="center">
                Meals Logged
              </Text>
            </Group>
            <Group justify="center" size="xl">
              <Stack>{`${mealsLogged}`}</Stack>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
      <Grid grow mt="4%">
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Card shadow="md" padding="lg" radius="md">
            <Group justify="center">
              <Text fw={500} size="xs" ta="center">
                Sugar Load
              </Text>
            </Group>
            <Group justify="center" size="xl">
              <Stack>{`${(totalSugar / 25) * 100}%`}</Stack>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
export default LeftSection;
