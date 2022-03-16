import axios from "axios";

const getApi = () => {
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcxMDQ0MTAsImV4cCI6MTY0NzE5MDgxMCwic3ViIjoiZTE3NjNhYzgtMmQwOS00MWI3LTkzYjctZDhiY2M3ZjJkZDcyIn0.npWbRd8zpjjIjQ37lmteslpRihKYa_mEwDu-4GDdz88`;   
    const api = axios.create({
        baseURL: "https://piupiuwer.polijrinternal.com",
    });

    (api.defaults.headers as any).Authorization = token;
    return api;
}

export default getApi;