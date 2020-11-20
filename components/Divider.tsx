import React from "react";
import { Divider as ChakraDivider, Grid } from "@chakra-ui/react";

const Divider: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
      <ChakraDivider marginY={6} />
      <ChakraDivider marginY={6} />
    </Grid>
  );
};

export default Divider;
