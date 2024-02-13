import { computed } from 'vue';
import { START_ADVENTURE_YEAR } from '@/shared/constants';

export const calculateYears = computed(() => (new Date().getFullYear() - START_ADVENTURE_YEAR));