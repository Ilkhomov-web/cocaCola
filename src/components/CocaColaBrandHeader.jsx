import { Box } from "@mui/material";
import React from "react";

function CocaColaBrandHeader(props) {
  const { brandData } = props;
  return (
    <div>
      <Box
        data-aos="fade-up"
        component={"img"}
        src={brandData.brandImg}
        sx={{ margin: "30px 0px ", borderRadius: "12px", width: "100%" }}
      ></Box>
    </div>
  );
}

export default CocaColaBrandHeader;
