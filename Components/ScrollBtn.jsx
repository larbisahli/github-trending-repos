import { FBtn, BtnContainer } from './style';
import { ArrowUp } from '../Svgs';
import { DisFlex_AIC_JCC } from '../styles';

const ScrollBtn = () => {
  const SmothScrollToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FBtn
      aria-label="scroll-button"
      isThemeBtn={false}
      onClick={SmothScrollToTheTop}
    >
      <BtnContainer>
        <DisFlex_AIC_JCC style={{ height: '100%', width: '100%' }}>
          <ArrowUp />
        </DisFlex_AIC_JCC>
      </BtnContainer>
    </FBtn>
  );
};

export default ScrollBtn;
