import { Box } from '@mui/material';

function WordleLetter({ active, value, onClick }) {
  return (
    <Box
      sx={{
      width: "4.5rem",
      height: "4.5rem",
      backgroundColor: 'primary.dark',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
        borderColor: "secondary.main",
        borderWidth: active ? "2px" : 0,
        borderStyle: "dashed",
      borderRadius: "8px",
      color: "text.secondary",
      fontSize: "4.5rem",
      margin: ".2rem"
      }}
      onClick={onClick}
    >
      {value}
    </Box>
  );
}

export default WordleLetter;