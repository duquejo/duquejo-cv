
<template>
  <div class="bg-white rounded pl-5 pr-4 py-4 last:mb-8 first:mt-1 mx-2 my-4 shadow flex-col">
    <span class="text-xs font-extrabold text-right">{{ event.created_at }}</span>
    <div class="flex items-center text-xs mb-2 justify-between gap-x-5">
      <span class="flex items-center gap-x-2">
        <img :src="event.actor.avatar_url" :alt="`@${event.actor.display_login}`" class="max-h-7 rounded-full" />
        <a class="font-semibold underline underline-offset-2" :href="`https://github.com/${event.repo.name}`" target="_blank">{{ event.repo.name }}</a>
      </span>
      <PillComponent 
        v-if="event.payload.ref && event.type === 'CreateEvent'" 
        :text="event.payload.ref" 
        :title="event.payload.ref" 
        size="small"
      />
      <PillComponent 
        class="truncate"
        v-else-if="event.payload.pull_request && event.type === 'PullRequestEvent'" 
        :text="event.payload.pull_request.head.ref" 
        :title="event.payload.pull_request.head.ref"
        size="small"
      />
    </div>
    <p v-if="event.type !== 'PullRequestEvent'" class="bg-gray-100 rounded-lg p-3 my- text-xs leading-relaxed">
      <strong>{{ event.payload.description }}</strong>
      <ul v-if="event.payload.commits" class="block">
        <li v-for="commit in event.payload.commits" :key="commit.sha">
          {{ markdownText(commit.message) }}
          <a
            v-if="event.type === 'PushEvent'"
            class="text-[0.7rem] font-semibold text-gray-700"
            target="_blank"
            :href="`${commit.url.replace('https://api.github.com/repos', 'https://github.com')}`"
            :title="t('general.menu.events_repo_commit_link')">
            <v-icon name="bi-github" scale="0.8"/>
          </a>
        </li>
      </ul>
    </p>
    <div class="flex items-center px-2 py-2 rounded-3xl gap-x-3 shadow-md relative hover:translate-y-0.5 transition-transform ring-1 ring-gray-200 text-xs">
      <span class="p-1 bg-yellow-400 rounded-full leading-none max-h-7" :class="icon.color">
        <component is="v-icon" :name="icon.icon" scale="1" />
      </span>
      {{ event.type }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Event } from '@/interfaces/github-events';
import { toRefs, computed } from 'vue';
import { checkText } from 'smile2emoji';
import PillComponent from '../pill/PillComponent.vue';
import { useI18n } from 'vue-i18n';


interface Props {
  event: Event
}

const props = defineProps<Props>();
const { t } = useI18n();
const { event } = toRefs(props);

const markdownText = (text: string): string => checkText(text);
const icon = computed(() => {
  switch (event.value.type) {
    case 'PullRequestEvent':
      return {
        icon: 'io-git-pull-request-sharp',
        color: 'bg-yellow-400',
      };
    case 'CreateEvent':
      return {
        icon: 'io-git-branch',
        color: 'bg-teal-400',
      };
    case 'PushEvent':
      return {
        icon: 'oi-repo-push',
        color: 'bg-red-400',
      };
    default:
      return {
        icon: 'oi-repo-push'
      };
  };
});
</script>