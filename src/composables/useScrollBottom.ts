import { ref } from 'vue';
import { PIXELS_GAP } from '@/shared/constants';
const useScrollBottom = () => {

  const isBottomReached = ref<boolean>(false);

  const handleScroll = (target: HTMLElement) => {
    const { scrollTop, scrollHeight, clientHeight } = target;
    const calc = Math.round(scrollTop + clientHeight) >= Math.round(scrollHeight - PIXELS_GAP);
    isBottomReached.value = calc;
  }
  return {
    isBottomReached,
    handleScroll,
  };
};

export default useScrollBottom;