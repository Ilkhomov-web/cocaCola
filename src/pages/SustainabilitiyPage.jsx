import React from "react";
import Navbar from "../components/Navbar";
import SustainabilitiyHeader from "../components/SustainabilitiyHeader";
import { Container } from "@mui/material";
import SustainabilitiyHeaderContent from "../components/SustainabilitiyHeaderContent";
import SustainabitiySwipper from "../components/SustainabitiySwipper";

function SustainabilitiyPage(props) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <SustainabilitiyHeader />
        <SustainabilitiyHeaderContent />
        <SustainabitiySwipper />
      </Container>
    </div>
  );
}

export default SustainabilitiyPage;
