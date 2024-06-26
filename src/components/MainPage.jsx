import React, { useContext } from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import Counter from "./Counter";
import TextEditor from "./TextEditor";
import UserForm from "./UserForm";
import UserId from "./UserId";
import { UserContext } from "../App";
import { Box } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
    borderRadius: theme.spacing(2),
  },
  counter: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  progressBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(4),
  },
  progressBar: {
    height: theme.spacing(5),
    backgroundColor: "#e0e0e0",
    borderRadius: theme.spacing(0.5),
    overflow: "hidden",
    width: "800%",
    maxWidth: 1200,
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

function MainPage() {
  const { count } = useContext(UserContext);
  const classes = useStyles();
  const maxCount = 20;
  const minCount = 0;
  const progress = useSpring({
    width: `${((count - minCount) / (maxCount - minCount)) * 100}%`,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Main Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20, height: 350 }}>
            <Typography variant="h6" gutterBottom>
              Counter App 🐣
            </Typography>
            <Counter />
            
              Psst! Keep an eye on the footer for a surprise 👀🎉
          
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Rich Text Editor
            </Typography>
            <TextEditor />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              User ID Generator
            </Typography>
            <UserId />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>
            <UserForm />
          </Paper>
        </Grid>
        {/* Footer section */}
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginRight: "10px" }}
            >
              {/* Progress bar component */}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.progressBarContainer}>
        <Box className={classes.progressBar}>
          <animated.div className={classes.progress} style={progress} />
        </Box>
      </div>
    </div>
  );
}

export default MainPage;