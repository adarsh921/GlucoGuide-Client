import { Grid } from "@mantine/core";
import ProgressRing from "../../../Components/ProgressRing";
import LeftSection from "../../../Components/LeftSection";
import RightSection from "../../../Components/RightSection";
import HealthAnalysis from "../../../Components/HealthAnalysis";
const Summary = () => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
          <ProgressRing />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <LeftSection />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
          <RightSection />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
          <HealthAnalysis />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Summary;
