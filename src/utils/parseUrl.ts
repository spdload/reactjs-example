export function parseUrl (url: string) {
    const queryString = url.split('?')[1];

    if (queryString) {
      const queryParams = queryString
        .split('&')
        .map((segment) => segment.split('='));

      return Object.fromEntries(queryParams);
    }

}