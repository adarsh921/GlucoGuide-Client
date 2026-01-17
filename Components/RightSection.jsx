import { Card } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import api from "../src/api/axios";
import { useEffect, useState } from "react";
import { LineChart } from "@mantine/charts";
import { vitalsEventBus } from "../src/events/healthEvents";

const RightSection = () => {
  const [rangeVitals, setRangeVitals] = useState();

  const getVitalsForARange = async (startDate, endDate) => {
    try {
      const response = await api.get(`/api/vitals`, {
        params: {
          startDate,
          endDate,
        },
      });
      console.log(response.data.allVitals);
      const chartData = response.data.allVitals.map((vital) => ({
        date: new Date(vital.date).toLocaleDateString(),
        bloodSugarLevel: vital.bloodSugarLevel,
      }));
      setRangeVitals(chartData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVitalsForARange("2025-12-16", new Date().toISOString().split("T")[0]);
    console.log(" I RAN on refresh! from line chart");

    const handler = () =>
      getVitalsForARange("2025-12-16", new Date().toISOString().split("T")[0]);
    vitalsEventBus.addEventListener("vitals-updated", handler);
    return () => {
      vitalsEventBus.removeEventListener("vitals-updated", handler);
    };
  }, []);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <LineChart
        h={190}
        w={900}
        data={rangeVitals}
        dataKey="date"
        series={[{ name: "bloodSugarLevel", color: "indigo" }]}
        curveType="linear"
      />
    </Card>
  );
};
export default RightSection;
