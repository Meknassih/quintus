import {GlobalStyles, useTheme} from "@mui/material";
import Keyboard from 'react-simple-keyboard';


// badKeys cannot be empty, using "1" as a dummy value because it doesn't appear on screen to suppress a console warning
// ! badKeys is lower case, availableKeys is upper case
function VirtualKeyboard({onKeyPress, badKeys}) {
  const theme = useTheme();
  let availableKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

  return (
    <>
      <GlobalStyles styles={{
        ".hg-button.keyboardButton": {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.default,
          borderBottomColor: theme.palette.divider,
        },
        ".hg-button.keyboardBadButton": {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey["700"],
          borderBottomColor: theme.palette.divider,
        },
        ".hg-button.hg-activeButton.keyboardButton": {
          backgroundColor: theme.palette.action.selected,
        },
        ".hg-button.hg-activeButton.keyboardBadButton": {
          backgroundColor: theme.palette.error.main,
        },
        ".simple-keyboard.hg-theme-default.keyboardTheme": {
          backgroundColor: theme.palette.primary.dark
        }
      }}/>
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
            buttons: availableKeys.filter(k => !badKeys.includes(k.toLowerCase())).join(" "),
          },
          {
            class: "keyboardBadButton",
            buttons: badKeys.length > 0 ? badKeys.map(k => k.toUpperCase()).join(" ") : "",
          }
        ]}
      />
    </>
  );
}

export default VirtualKeyboard;