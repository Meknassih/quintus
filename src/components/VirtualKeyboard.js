import { GlobalStyles, useTheme } from "@mui/material";
import Keyboard from 'react-simple-keyboard';



function VirtualKeyboard({ onKeyPress }) {
  const theme = useTheme();
  return (
    <>
      <GlobalStyles styles={{
        ".hg-button.keyboardButton": {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.default,
          borderBottomColor: theme.palette.divider,

        },
        ".hg-button.hg-activeButton.keyboardButton": {
          backgroundColor: theme.palette.action.selected,
        },
        ".simple-keyboard.hg-theme-default.keyboardTheme": {
          backgroundColor: theme.palette.primary.dark
        }
      }} />
      <Keyboard
        onKeyPress={onKeyPress}
        layout={{
          default: [
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            'Z X C V B N M',
          ],
          shift: [
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            'Z X C V B N M',
          ]
        }}
        theme={"hg-theme-default hg-layout-default keyboardTheme"}
        buttonTheme={[
          {
            class: "keyboardButton",
            buttons: 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M',
          },
        ]}
      />
    </>
  );
}

export default VirtualKeyboard;