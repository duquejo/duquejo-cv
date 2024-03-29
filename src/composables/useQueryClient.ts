import { useQuery } from '@tanstack/vue-query';
import githubApi from '@/api/githubApi';
import { Event } from '@/interfaces/github-events';

const getEvents = async () => {
  try {
    const { data } = await githubApi.get<Event[]>('/events?per_page=10&page=1');
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useQueryClient = () => {

  const { isLoading, data: events, refetch } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60,
    enabled: false // Don't load at start
  });

  return {
    events,
    isLoading,

    refetch,
  };
};

export default useQueryClient;