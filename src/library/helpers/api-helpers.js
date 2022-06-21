export const PostcodeSearchApiUrl = process.env.NEXT_PUBLIC_POSTCODE_SEARCH_API_URL ?? false;
export const PostcodeSearchApiKey = process.env.NEXT_PUBLIC_POSTCODE_SEARCH_API_KEY ?? false;

export const ParishApiUrl = (type) => {
  if (type === 'north') {
    return process.env.NEXT_PUBLIC_CTAX_PARISH_API_URL_NORTH ?? false;
  }
  if (type === 'west') {
    return process.env.NEXT_PUBLIC_CTAX_PARISH_API_URL_WEST ?? false;
  }
};
