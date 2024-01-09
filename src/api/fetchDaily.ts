const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export default async (urlParams: string) => {
  try {
    const response = await fetch(
      `${apiUrl}?apiKey=${apiKey}&page_size=1&language=${urlParams}`
    );

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
