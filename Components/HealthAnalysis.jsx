import { Card, Loader } from "@mantine/core";
import api from "../src/api/axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { vitalsEventBus } from "../src/events/healthEvents";
const HealthAnalysis = () => {
  const [analysis, setAnalysis] = useState(() => {
    return localStorage.getItem("savedAnalysis");
  });
  const [isLoading, setIsLoading] = useState(false);

  const getHealthAnalysis = async () => {
    try {
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

  useEffect(() => {
    console.log(" I RAN on refresh!");

    const handler = () => getHealthAnalysis();
    vitalsEventBus.addEventListener("vitals-updated", handler);
    return () => {
      vitalsEventBus.removeEventListener("vitals-updated", handler);
    };
  }, []);

  return (
    <Card shadow="lg" padding="lg" radius="lg" withBorder>
      {isLoading ? <Loader color="indigo" /> : <Markdown>{analysis}</Markdown>}
    </Card>
  );
};
export default HealthAnalysis;
