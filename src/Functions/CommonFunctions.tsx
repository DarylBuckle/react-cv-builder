import React from 'react'

export function idealTextColor(bgColor?: string) {
  var nThreshold = 105
  let components = null
  if (bgColor != null) {
    var r = bgColor.substring(1, 3)
    var g = bgColor.substring(3, 5)
    var b = bgColor.substring(5, 7)
    components = {
      R: parseInt(r, 16),
      G: parseInt(g, 16),
      B: parseInt(b, 16)
    }
  } else {
    components = {
      R: 255,
      G: 255,
      B: 255
    }
  }
  var bgDelta =
    components.R * 0.299 + components.G * 0.587 + components.B * 0.114
  return 255 - bgDelta < nThreshold ? '#000' : '#fff'
}

export function displayMemo(display: string | undefined) {
  let displayMod: string | undefined = display
  let displayArray: any[] | undefined
  if (displayMod != null) {
    displayMod = displayMod.replace(
      /(?:\r\n|\r|\n)/g,
      'slinebreak<br/>slinebreak'
    )
    displayArray = displayMod.split('slinebreak')
    for (var i = 0; i < displayArray.length; i++) {
      if (displayArray[i] === '<br/>') {
        displayArray[i] = <br key={i} />
      }
    }
  }
  return displayArray
}
