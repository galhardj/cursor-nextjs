/**
 * Generic API fetch function with TypeScript support
 * @param url - The API endpoint URL to fetch from
 * @returns Promise resolving to the fetched data or throwing an error
 */

export const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }

    // Handle non-Error objects
    throw new Error(
      err instanceof Error
        ? err.message
        : "An error occurred while fetching data",
    );
  }
};
