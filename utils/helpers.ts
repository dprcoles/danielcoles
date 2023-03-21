import { ColourThemeType, NotationColours } from "@/types/notations"

import { DARK_THEME_COLOURS } from "./constants"

export const shuffle = (array: Array<any>): Array<any> => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const shuffledColours = (): NotationColours => {
  const colours: Array<ColourThemeType> = shuffle(DARK_THEME_COLOURS)

  const coloursArray: NotationColours = {
    box: [...shuffle(colours.filter(x => x.types.includes("box")).map(x => x.hex))],
    bracket: [...shuffle(colours.filter(x => x.types.includes("bracket")).map(x => x.hex))],
    highlight: [...shuffle(colours.filter(x => x.types.includes("highlight")).map(x => x.hex))],
    underline: [...shuffle(colours.filter(x => x.types.includes("underline")).map(x => x.hex))],
  }

  return coloursArray
}
