import { Box } from "@mui/material";
import { Oval } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Oval height="100" width="100" ariaLabel='loading' color='grey' secondaryColor='grey' />
    </Box>
  );
}

export default LoadingSpinner;