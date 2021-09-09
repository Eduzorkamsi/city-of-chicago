import axios from "axios";

const permitApi = axios.create({
    baseURL: "/resource/ydr8-5enu.json",
});

export default permitApi;