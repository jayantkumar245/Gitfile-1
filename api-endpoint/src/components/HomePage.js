import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh"}}>
          <Button onClick={()=>navigate("/registration")} variant="contained" color="primary">
          Registration
        </Button>
          </Box>
      </Container>
    </>
  );
}
