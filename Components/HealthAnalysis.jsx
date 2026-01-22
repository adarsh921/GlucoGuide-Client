import { Button, Card, Group, Loader,Divider,Flex,Title, Badge } from "@mantine/core";
import api from "../src/api/axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { vitalsEventBus } from "../src/events/healthEvents";
const HealthAnalysis = () => {
  const [analysis, setAnalysis] = useState(() => {
    return localStorage.getItem("savedAnalysis");
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    const getHealthAnalysis = async () => {
      try {
        console.log("YES I RAN FROM GET HEALTH ANALYSIS!");

        setIsLoading(true);
        const response = await api.post(`/api/vitals/analysis`);
        localStorage.setItem("savedAnalysis", response.data.analysis);
        console.log("Here is your health analysis!");
        // console.log(response.data.analysis);
        setAnalysis(response.data.analysis);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getHealthAnalysis();
  };

  // useEffect(() => {
  //   console.log(" I RAN on refresh!");

  //   const handler = () => getHealthAnalysis();
  //   vitalsEventBus.addEventListener("vitals-updated", handler);
  //   return () => {
  //     vitalsEventBus.removeEventListener("vitals-updated", handler);
  //   };
  // }, []);

  return (
    <Card shadow="lg" padding="lg" radius="lg" withBorder>
      <Flex align="center" justify="space-between">
        {/* <Badge color="blue">status</Badge> */}
        <Title order={4}>AI Based Analysis</Title>
        <Button
          size="sm"
          onClick={handleClick}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Get/Regenerate Analysis
        </Button>
      </Flex>
      <Divider my="lg" />

      {isLoading ? <Loader color="indigo" /> : <Markdown>{analysis}</Markdown>}
    </Card>
  );
};
export default HealthAnalysis;
