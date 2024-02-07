
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        // process.env.REACT_APP_YOUTUBE_API_KEY,
        // '62960dc3a2msh04e7c04e10e987bp181acdjsn999d9042ad2e',
        // '4af67d102cmsh440de0dd05ebb53p13d1cbjsn2b6a0e7441e7',
        '9d87dcdbc3msh8eb3ffd42f66f8ep13bd43jsn3b77221955b3',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};