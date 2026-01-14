import { Card, Group, Stack, Loader } from "@mantine/core";
import { RingProgress, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import api from "../src/api/axios";
import { healthEventBus, vitalsEventBus } from "../src/events/healthEvents";

const ProgressRing = () => {
  const [score, setScore] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchHealthScore = async () => {
    console.log("fetchHealthScore ran!");
    
    try {
      setIsLoading(true);
      const response = await api.post("/api/vitals/healthscore");
      console.log(response);
      if (response.data.score) {
        setScore(response.data.score);
        setTitle(response.data.title);
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthScore();
    const handler = () => fetchHealthScore();
    healthEventBus.addEventListener("health-updated", handler);
    vitalsEventBus.addEventListener("vitals-updated", handler);
    return () => {
      healthEventBus.removeEventListener("health-updated", handler);
      vitalsEventBus.removeEventListener("vitals-updated", handler);
    };
  }, []);

  return (
    <Card shadow="lg" padding="lg" radius="lg" withBorder mt="2%">
      <Group>
        <RingProgress
          label={
            <Text size="xs" ta="center">
              {isLoading ? <Loader color="indigo" /> : score}
            </Text>
          }
          sections={[{ value: `${score}`, color: "blue" }]}
        />
        <Stack>{`${title}`}</Stack>
        <Stack>{`${message}`}</Stack>
      </Group>
    </Card>
  );
};
export default ProgressRing;
