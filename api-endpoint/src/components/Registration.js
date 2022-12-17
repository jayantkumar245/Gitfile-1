import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Action";

export default function Registration() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [stateNew, setStateNew] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    web: "",
    age: "",
  });

  const {
    first_name,
    last_name,
    company_name,
    city,
    state,
    zip,
    email,
    web,
    age,
  } = stateNew;

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setStateNew({ ...stateNew, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !first_name ||
      !last_name ||
      !company_name ||
      !city ||
      !state ||
      !zip ||
      !email ||
      !web ||
      !age
    ) {
      setError("Please Fill All the Input Field");
    } else {
      dispatch(addUser(stateNew));
      navigate("/userdetails");
      setError("");
    }
  };
  return (
    <><Button
    style={{float:"right" }}
    variant="contained"
    color="secondary"
    onClick={() => navigate("/")}
  >
    Go Back
  </Button>
    <div>
      <h2 style={{marginBottom:"20px"}}>Register</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box
          sx={{marginBottom:"10px",
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
        >
          <TextField
            id="standard-basic"
            label="Firstname"
            variant="standard"
            value={first_name}
            name="first_name"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Lastname"
            variant="standard"
            value={last_name}
            name="last_name"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Companyname"
            variant="standard"
            value={company_name}
            name="company_name"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            value={city}
            name="city"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="State"
            variant="standard"
            value={state}
            name="state"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Zip"
            variant="standard"
            value={zip}
            name="zip"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Web"
            variant="standard"
            value={web}
            name="web"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            value={age}
            name="age"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <Button
            style={{ width: "100px" }}
            variant="contained"
            color="primary"
            type="submit"
            onChange={handleInputChange}
          >
            Register
          </Button>
        </Box>
      </form>
    </div>
    </>
  );
}
