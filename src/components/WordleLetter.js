import { Box } from '@mui/material';

function WordleLetter() {
  return (
    <Box sx={{
      width: "4.5rem",
      height: "4.5rem",
      backgroundColor: 'primary.dark',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "secondary.dark",
      borderWidth: "2px",
      borderRadius: "8px",
      color: "text.secondary",
      fontSize: "4.5rem",
      margin: ".2rem"
    }}>
      A
    </Box>
  );
}

export default WordleLetter;