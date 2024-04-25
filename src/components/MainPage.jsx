import React, { useState,useEffect } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import Counter from "./Counter";
import TextEditor from "./TextEditor";
import UserForm from "./UserForm";
import UserId from "./UserId";
import ProgressBar from "./Progressbar";

function MainPage() {
  const[user,setuser]=useState(null);

  

  const [count, setCount] = useState(0);
  const maxCount = 20;
  const minCount = 0;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = ((count - minCount) / (maxCount - minCount)) * 100;
    setProgress(newProgress);
  }, [count, maxCount, minCount]);


  
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Main Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20, height: 350 }}>
            <Typography variant="h6" gutterBottom>
             {/* Counter app components  */}  
            Counter App 🐣
            </Typography>
            <Counter/>
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
             {/* Progress bar component  */} 
             </Typography>
             <ProgressBar progress={progress} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
