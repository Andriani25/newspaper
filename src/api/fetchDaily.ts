const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export default async () => {
  try {
    const response = await fetch(`${apiUrl}?apiKey=${apiKey}&page_size=1`);

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
