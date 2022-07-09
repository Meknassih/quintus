import { Box } from '@mui/material';

function WordleLetter({ active, editable, status, value, onClick }) {
  function backgroundColor() {
    switch (status) {
      case "position":
        return "success.dark";
      case "present":
        return "warning.dark";
      case "none":
        return "grey.800";
      default:
        return editable ? "primary.dark" : "transparent";
    }
  }

  function borderColor() {
    switch (status) {
      case "position":
        return "success.main";
      case "present":
        return "warning.main";
      case "none":
        return "grey.600";
      default:
        return editable ? (active ? "primary.light" : "primary.dark") : "grey.800";
    }
  }

  return (
    <Box
      sx={{
        width: "4.5rem",
        height: "4.5rem",
        backgroundColor: backgroundColor(),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: borderColor(),
        borderWidth: "2px",
        borderStyle: active ? "dashed" : "solid",
        borderRadius: "8px",
        color: "text.secondary",
        fontSize: "4.5rem",
        margin: ".2rem"
      }}
      onClick={onClick}
    >
      {value.toUpperCase()}
    </Box>
  );
}

export default WordleLetter;