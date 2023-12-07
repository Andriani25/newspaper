const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const apiUrlCountry = process.env.EXPO_PUBLIC_API_URL_COUNTRY;

export default async (urlParams: string) => {
  try {
    const response = await fetch(
      `${apiUrlCountry}?apiKey=${apiKey}&page_size=5&country=${urlParams}`
    );

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
