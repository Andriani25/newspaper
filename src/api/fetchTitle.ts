const apiUrl = process.env.EXPO_PUBLIC_API_URL_EVERYTHING;

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export default async (urlParams: string) => {
  try {
    const response = await fetch(
      `${apiUrl}?q=${
        typeof urlParams !== "undefined" && urlParams.length > 0
          ? urlParams
          : ""
      }&pageSize=5&api_key=${apiKey}}`
    );

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
