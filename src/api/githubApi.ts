import axios from 'axios';

const user = import.meta.env.VITE_GITHUB_USER;
const token = import.meta.env.VITE_GITHUB_SOURCE;

const githubApi = axios.create({
  baseURL: `https://api.github.com/users/${user}`,
  headers: {
    Authorization: `token ${token}`,
  },
});

export default githubApi;