import { useEffect } from 'react';
import { useLocalStorage } from './';

const generalBackgroundDark = '#1f1f1f';
const generalBackgroundLight = '#f9f9f9';

export function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage('isDarkMode', null);
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const root = document.documentElement;
    if (enabledState !== null)
      root?.style.setProperty('--bg-transition-duration', '100ms');

    const className = 'dark-mode';
    const element = window.document.body;
    const CSSOM = document.body.style;

    if (enabled) {
      CSSOM.backgroundColor = generalBackgroundDark;
      element.classList.add(className);
    } else {
      CSSOM.backgroundColor = generalBackgroundLight;
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}

function usePrefersDarkMode() {
  let value = false;

  if (process.browser) {
    try {
      value =
        Number(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--dark-env'
          )
        ) === 1;
    } catch (error) {
      console.log(error);
    }
  }
  return value;
}
