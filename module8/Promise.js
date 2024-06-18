function fetchMultipleUrls(urls) {
  const fetchPromises = urls.map(url => 
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
              }
              return response.text(); 
          })
  );
  return Promise.all(fetchPromises)
      .then(contents => {
          return contents; 
      })
      .catch(error => {
          console.error('Error fetching URLs:', error);
          throw error; 
      });
}

const urls = [
  'https://example.com',
];

fetchMultipleUrls(urls)
  .then(contents => {
      contents.forEach((content, index) => {
          console.log(`Content from URL ${urls[index]}:`);
          console.log(content);
      });
  })
  .catch(error => {
      console.error('Failed to fetch some URLs:', error);
  });