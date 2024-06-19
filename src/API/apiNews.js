import axios from "axios"

const TOKEN = 'DtVcSiJ-7kMDdq00cDEHFcWwHOdNK9B5mt-hcUmWAAC9ZFKB'
axios.defaults.baseURL = 'https://api.currentsapi.services/v1/'

export const fetchNews = async () => {
    try{
        const {data} = await axios.get('latest-news', {
            params: {
                apiKey: TOKEN
            }
        })
        return data
    }catch(error) {
        console.log(error.message)
    }
}