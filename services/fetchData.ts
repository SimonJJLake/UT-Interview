import { ApiData } from "../utils/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export const fetchData: () => Promise<ApiData> = async () => {
  const response = await fetch(apiUrl, { headers: { Authorization: apiKey } });
  const responseJson = await response.json();
  return responseJson;
};
