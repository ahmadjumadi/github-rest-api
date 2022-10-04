import axios from 'axios';

const personalAccessToken = "TOKEN_ACCESS_TOKEN_GITHUB";

const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${personalAccessToken}`,
    Accept: "application/vnd.github+json",
  },
});

export default instance;