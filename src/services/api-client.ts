import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d6680a0b4704ef4ac26f44a0dbaf177',
        dates: '2019-09-01,2019-09-02',
        platforms: '18'
    }
})