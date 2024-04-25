import React, { useContext, useState } from 'react';
import { TextField, Button, Container, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const Reg = () => {
  const  {setIsAuthenticated}= useContext(userContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('email', formData.email.trim());
    localStorage.setItem('password', formData.password.trim());
    console.log('Form data stored:', formData);
    setIsAuthenticated(true);
    window.location.href = '/main';
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <Typography variant="h5" className={classes.title}>
            Register
          </Typography>
          <TextField
            name="name"
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submitButton}
          >
            Submit
          </Button>
          <Typography variant="body2" className={classes.loginText}>
            Already have an account?{' '}
            <Link to="/" color="primary">
              Login here
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  loginText: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default Reg;