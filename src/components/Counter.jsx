import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(2),
  },
  counter: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  progressBar: {
    height: theme.spacing(1),
    backgroundColor: '#e0e0e0',
    borderRadius: theme.spacing(0.5),
    overflow: 'hidden',
    width: '100%',
    maxWidth: 400,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const CounterApp = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const maxCount = 20;
  const minCount = 0;

  const progress = useSpring({
    width: `${((count - minCount) / (maxCount - minCount)) * 100}%`,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, minCount));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h1">
        Counter App
      </Typography>
      <Typography className={classes.counter}>{count}</Typography>
      <Box className={classes.progressBar}>
        <animated.div className={classes.progress} style={progress} />
      </Box>
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