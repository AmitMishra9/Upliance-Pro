import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
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
}));

const ProgressBar = ({ progress }) => {
  const classes = useStyles();
  const barProgress = useSpring({
    width: `${progress}%`,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <div className={classes.progressBar}>
      <animated.div className={classes.progress} style={barProgress} />
    </div>
  );
};

export default ProgressBar;
