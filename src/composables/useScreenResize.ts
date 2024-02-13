import { DESKTOP_BREAKPOINT } from '@/shared/constants';

const useScreenResize = () => {
  return {
    isMobile: () => screen.width <= DESKTOP_BREAKPOINT
  };
};

export default useScreenResize;