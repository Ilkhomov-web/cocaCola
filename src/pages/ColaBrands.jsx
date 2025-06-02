import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import React from "react";
import CocaColaBrandHeader from "../components/CocaColaBrandHeader";

function ColaBrands(props) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <CocaColaBrandHeader />
      </Container>
    </div>
  );
}

export default ColaBrands;
