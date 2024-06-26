import axios from "axios"

const TOKEN = 'DtVcSiJ-7kMDdq00cDEHFcWwHOdNK9B5mt-hcUmWAAC9ZFKB'
axios.defaults.baseURL = 'https://api.currentsapi.services/v1/'

export const fetchNews = async ({page_number=1, page_size=10, category}) => {
    try{
        const {data} = await axios.get('search', {
            params: {
                apiKey: TOKEN,
                page_number,
                page_size,
                category
            }
        })
        return data
    }catch(error) {
        console.log(error.message)
    }
}

export const fetchCategory = async () => {
    try{
        const categories = await axios.get('available/categories',{
            params: {
                apiKey: TOKEN,
            }
        })
        return categories
    }catch(error) {
        console.log(error.message)
    }
}