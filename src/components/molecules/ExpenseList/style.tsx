import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: "calc(100vh - 100px)",
      paddingBottom: "0px",
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);

export default useStyles;
