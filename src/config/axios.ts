import axios from "axios";

const getApi = () => {
  const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc5MDQ1NDMsImV4cCI6MTY0Nzk5MDk0Mywic3ViIjoiZTE3NjNhYzgtMmQwOS00MWI3LTkzYjctZDhiY2M3ZjJkZDcyIn0.MvgKlDDDccr9Y6-tluZ8cnZACagpcycqWulG1_iZIYU`;
  const api = axios.create({
    baseURL: "https://piupiuwer.polijrinternal.com",
  });

  (api.defaults.headers as any).Authorization = token;
  return api;
};

export default getApi;
