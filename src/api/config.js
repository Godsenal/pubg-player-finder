import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4NTU2MzQ1MC04MDc5LTAxMzYtNWQzMi02ZDU2ZjM4YjRkMzMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTM0MDkwODE1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InBsYXllci1maW5kZXIifQ.D2KVd6YCB_e_GoXxhkGsfZQdU3STEXWeG-6ln9yvMbY';
const instance = axios.create({
  baseURL: 'https://api.pubg.com/shards/',
  headers: {
    Accept: 'application/vnd.api+json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default instance;

