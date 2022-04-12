import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '72eec98577mshf5c500549c7d5fbp1a63acjsna221f55b3f17',
    },
  });

  return data;
};
