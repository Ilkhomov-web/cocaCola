import { Box } from "@mui/material";
import React from "react";

function CocaColaBrandHeader(props) {
  return (
    <div>
      <Box
        component={"img"}
        src="/public/cocaBrand.webp"
        sx={{ margin: "30px 0px ", borderRadius: "12px" }}
      ></Box>
    </div>
  );
}

export default CocaColaBrandHeader;
