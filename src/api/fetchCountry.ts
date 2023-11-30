const API_KEY = "a9daba1c3e914606a2b16e93ddeafb89";

const API_URL = "https://newsapi.org/v2/top-headlines";

// https://newsapi.org/v2/top-headlines?country=us&apiKey=a9daba1c3e914606a2b16e93ddeafb89

export default async (urlParams: string) => {
  try {
    const response = await fetch(
      `${API_URL}?country${
        typeof urlParams !== "undefined" && urlParams.length > 0
          ? urlParams
          : ""
      }&api_key=${API_KEY}}`
    );

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
