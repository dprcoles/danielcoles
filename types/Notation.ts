import { types } from "react-rough-notation"

export type ColourThemeType = {
  hex: string
  colour: string
  types: Array<types>
}

export type NotationColours = {
  box: Array<string>
  bracket: Array<string>
  highlight: Array<string>
  underline: Array<string>
}
