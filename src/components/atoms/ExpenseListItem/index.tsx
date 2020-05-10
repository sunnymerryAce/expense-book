import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export type ExpenseItemData = {
  categoryName: string;
  title: string;
  amount: number;
};
export interface ExpenseListItemProps extends ExpenseItemData {
  handleClickItem: (props: unknown) => unknown;
}

const ExpenseListItem: React.FC<ExpenseListItemProps> = (props) => {
  return (
    <>
      <ListItem button onClick={props.handleClickItem}>
        <ListItemText primary={props.categoryName} secondary={props.title} />
        {/* TODO: スタイル記述をstyle.tsxに移管 */}
        <Box fontSize="subtitle1" fontFamily="h2.fontFamily">
          {`¥${props.amount}`}
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ExpenseListItem;
