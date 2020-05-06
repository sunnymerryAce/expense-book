import React from "react";
import Box from "@material-ui/core/Box";
import getPriceSeparatedByComma from "@/util/functions/getPriceSeparatedByComma";
import useStyles from "./style";

interface ChartLabelProps {
  expenseAmount: number;
  budgetAmount: number;
}

const ChartLabel: React.FC<ChartLabelProps> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} fontFamily="h2.fontFamily">
      <Box>Total: ¥{getPriceSeparatedByComma(props.expenseAmount)}</Box>
      <Box padding="0 10px">/</Box>
      <Box>Budget: ¥{getPriceSeparatedByComma(props.budgetAmount)}</Box>
    </Box>
  );
};

export default ChartLabel;
