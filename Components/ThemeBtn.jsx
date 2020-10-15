import React, { useEffect, useState, memo } from 'react';
import { FBtn, BtnWrapper, BtnContainer, SvgWrap } from './style';
import { MoonSvg, SunSvg } from '../Svgs';
import { useDarkMode } from '../Hooks';

const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [InitialRender, setInitialRender] = useState(false);

  const HandleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setInitialRender(true);
  }, []);

  return (
    <FBtn aria-label="theme-button" isThemeBtn={true} onClick={HandleTheme}>
      <BtnContainer>
        <BtnWrapper Active={InitialRender ? darkMode : false}>
          <SvgWrap>
            <MoonSvg />
          </SvgWrap>
          <SvgWrap>
            <SunSvg />
          </SvgWrap>
        </BtnWrapper>
      </BtnContainer>
    </FBtn>
  );
};

export default memo(ThemeBtn);
