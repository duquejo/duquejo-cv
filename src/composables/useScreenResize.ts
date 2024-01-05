const useScreenResize = () => {
  return {
    isMobile: () => screen.width <= 760
  };
};

export default useScreenResize;