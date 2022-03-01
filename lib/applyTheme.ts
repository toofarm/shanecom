import { EThemes } from 'types'

const applyTheme = (theme : EThemes):boolean => {
  const themes = {
    [EThemes.LIGHT]: {
      primaryText: '#222',
      secondaryText: '#888',
      backgroundColor: '#FFF',
      flagColor: '#343642',
      linkColor: '#4646fd',
      hoverColor: 'rgba(239, 239, 239, 0.65)'
    },
    [EThemes.DARK]: {
      primaryText: '#efefef',
      secondaryText: '#bbb',
      backgroundColor: '#26272c',
      flagColor: '#B39D2A',
      linkColor: '#6981ff',
      hoverColor: 'rgb(82 82 82 / 65%)',
    }
  }

  let themeWrapper: HTMLBodyElement | null
  if (typeof document === 'undefined') {
    return false
  } else {
    themeWrapper = document.querySelector('body')
    if (themeWrapper !== null) {
      themeWrapper.style.setProperty('--primaryText', themes[theme].primaryText)
      themeWrapper.style.setProperty('--secondaryText', themes[theme].secondaryText)
      themeWrapper.style.setProperty('--backgroundColor', themes[theme].backgroundColor)
      themeWrapper.style.setProperty('--flagColor', themes[theme].flagColor)
      themeWrapper.style.setProperty('--hoverColor', themes[theme].hoverColor)
      themeWrapper.style.setProperty('--linkColor', themes[theme].linkColor)
    }
    return true
  }

}

export default applyTheme