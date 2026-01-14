import { Card, Grid, Avatar, Text, Affix } from "@mantine/core";
export const SideBar = () => {
  return (
    <Card shadow="lg" padding="lg" h="100%">
      <Grid>
        <Avatar src="../public/GlucoGuide.png" alt="" />
        <Text
          mt="1.6%"
          ml="20%"
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
        >
          GlucoGuide
        </Text>
      </Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Card>
  );
};
