import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/abdelhaq-laachari">
        Crédit du maroc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [formErrors, setFormErrors] = React.useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  React.useEffect(() => {
    // check for error and show toast alert
    if (isError) {
      toast.error(message);
    }
    // if user logged in redirect him to home
    if (isSuccess) {
      navigate("/");
      // toast.success("register success");
    }
    // we need to reset everything
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const phoneNumber = data.get("phone");
    const age = data.get("age");

    const formData = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      age,
    };

    setFormErrors(validate(formData));

    // if (email && password && firstName && lastName && phoneNumber && age) {
    //   try {
    //     const res = await axios.post("client/register", formData);
    //     localStorage.setItem("user", res.data.Token);
    //     // window.location.href = "/";
    //   } catch (error) {
    //     console.log(error);
    //     if (error.response.status === 401) {
    //       //   toast.error(error.response.data.message);
    //       console.log(error.response.data.message);
    //     }
    //   }
    // }

    dispatch(register(formData));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!values.age) {
      errors.age = "Age is required";
    }
    return errors;
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  error={formErrors.firstName ? true : false}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
                {formErrors.firstName && (
                  <Typography variant="body2" color="error">
                    {formErrors.firstName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={formErrors.lastName ? true : false}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
                {formErrors.lastName && (
                  <Typography variant="body2" color="error">
                    {formErrors.lastName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={formErrors.email ? true : false}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {formErrors.email && (
                  <Typography variant="body2" color="error">
                    {formErrors.email}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={formErrors.password ? true : false}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {formErrors.password && (
                  <Typography variant="body2" color="error">
                    {formErrors.password}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={formErrors.phoneNumber ? true : false}
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="number"
                  id="number"
                />
                {formErrors.phoneNumber && (
                  <Typography variant="body2" color="error">
                    {formErrors.phoneNumber}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={formErrors.age ? true : false}
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="number"
                />
                {formErrors.age && (
                  <Typography variant="body2" color="error">
                    {formErrors.age}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
