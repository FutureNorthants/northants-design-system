

export const PostcodeSearchApiUrl = (process.env.hasOwnProperty('POSTCODE_SEARCH_API_URL')) ? process.env.POSTCODE_SEARCH_API_URL : false;
export const PostcodeSearchApiKey = (process.env.hasOwnProperty('POSTCODE_SEARCH_API_KEY')) ? process.env.POSTCODE_SEARCH_API_KEY : false;


export const ParishApiUrl = (type) => {
    if(type==="north") {
        return (process.env.hasOwnProperty('CTAX_PARISH_API_URL_NORTH')) ? process.env.CTAX_PARISH_API_URL_NORTH : false;
    }
    if(type==="west") {
        return (process.env.hasOwnProperty('CTAX_PARISH_API_URL_WEST')) ? process.env.CTAX_PARISH_API_URL_WEST : false;
    }

} 