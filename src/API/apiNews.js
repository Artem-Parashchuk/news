import axios from "axios"

const TOKEN = 'DtVcSiJ-7kMDdq00cDEHFcWwHOdNK9B5mt-hcUmWAAC9ZFKB'
axios.defaults.baseURL = 'https://api.currentsapi.services/v1/'

export const fetchNews = async (page_number=1, page_size=10) => {
    try{
        const {data} = await axios.get('search', {
            params: {
                apiKey: TOKEN,
                page_number,
                page_size
            }
        })
        return data
    }catch(error) {
        console.log(error.message)
    }
}