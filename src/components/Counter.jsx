import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import { UserContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#fff3e0",
    borderRadius: theme.spacing(2),
  },
  counter: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  progressBar: {
    height: theme.spacing(1),
    backgroundColor: "#e0e0e0",
    borderRadius: theme.spacing(0.5),
    overflow: "hidden",
    width: "100%",
    maxWidth: 400,
  },
  progress: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const CounterApp = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useContext(UserContext);
  const classes = useStyles();
  const maxCount = 20;
  const minCount = 0;

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h1"></Typography>
      <Typography className={classes.counter}>
        <h1>{count}</h1>
      </Typography>
      <Box className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleIncrement}
          disabled={count === maxCount}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleDecrement}
          disabled={count === minCount}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          onClick={handleReset}
        >
          Reset
        </Button>
        
      </Box> 
    </Box>
  );
};

export default CounterApp;