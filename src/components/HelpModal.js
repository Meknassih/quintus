import { Dialog, DialogTitle, Divider, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HelpLetterExample from "./HelpLetterExample";

function HelpModal({ open, onClose }) {
  function handleClose() {
    onClose();
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Typography variant="inherit">How to play</Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: "1rem"
        }}
      >
        <Grid item xs={12}>
          <Typography component="p" gutterBottom>
            You must guess a five-letter word in six tries or less.
          </Typography>
          <Typography component="p" gutterBottom>
            Every day a new word is picked at random at midnight UTC+0. You can only guess one time each day.
          </Typography>
          <Typography component="p" gutterBottom>
            After you try a word, color coded clues are displayed for each cell.
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <HelpLetterExample
        value="h"
        status="none"
      />
      <Divider />
      <HelpLetterExample
        value="e"
        status="present"
      />
      <Divider />
      <HelpLetterExample
        value="m"
        status="position"
      />
    </Dialog>
  );
}

export default HelpModal;