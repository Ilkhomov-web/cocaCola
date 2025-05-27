import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function RightWhiteContentCard(props) {
  const { conTitle, conDescription, conImgPath, conLink } = props;
  return (
    <div style={{ marginTop: "700px" }}>
      <Container maxWidth={"lg"}>
        {/* <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", margin: "50px 0" }}
        >
          Global ta'sir
        </Typography> */}
        <Box
          sx={{ display: "flex", margin: "150px 0px", position: "relative" }}
        >
          <Box
            sx={{
              background: "white",
              width: "45%",
              height: "460px",
              borderRadius: "12px",
              padding: "30px",
              position: "absolute",
              zIndex: 2,
              top: "-70px",
              right: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              boxShadow: "0px 4px 40px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {conTitle}
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "#000", wordSpacing: "1px", lineHeight: "1.2" }}
              >
                {conDescription}
              </Typography>
            </Box>
            <Link
              to={conLink}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                sx={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid #000",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                Ko'proq o'qish
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: "55%",
              position: "absolute",
              zIndex: 1,
              height: "460px",
              left: "70px",
              borderRadius: "12px",
            }}
            component={"img"}
            src={conImgPath}
          ></Box>
        </Box>
      </Container>
    </div>
  );
}

export default RightWhiteContentCard;
