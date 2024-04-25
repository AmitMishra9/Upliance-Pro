import React, { useContext, useState } from 'react';
import { TextField, Button, Container, Typography, Link, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const Login = () => {
  const {setIsAuthenticated}= useContext(userContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Login form submitted:', formData);

    const storedEmail = localStorage.getItem('email')?.trim();
    const storedPassword = localStorage.getItem('password')?.trim();

    console.log('Stored email:', storedEmail);
    console.log('Stored password:', storedPassword);

    if (storedEmail && storedPassword) {
      if (formData.email.trim() === storedEmail && formData.password.trim() === storedPassword) {
        console.log('Credentials match. Redirecting to main page...');
         setIsAuthenticated(true);   
        navigate('/main');

      } 
    } else {
      console.log('Email or password not found in localStorage.');
    }
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.formContainer}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        <form className={classes.form}>
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
          <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.submitButton}>
            Login
          </Button>
          <Typography variant="body2" className={classes.registerText}>
            Don't have an account?{' '}
            <Link href="/register" color="primary">
              Register here
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
  title: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  registerText: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default Login;
