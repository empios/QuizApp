export function api<T>(url: string, svg?: boolean): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (svg) {
        return response;
      }

      return response.json();
    });
}
