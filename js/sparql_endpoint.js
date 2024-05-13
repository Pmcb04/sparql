export async function executeQueryWikidata(query) {
    try {
      const response = await fetch('https://query.wikidata.org/sparql?query=' + encodeURIComponent(query) + '&format=json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results.bindings; 
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function executeQueryDBpedia(query) {
  try {
      const response = await fetch('http://dbpedia.org/sparql?query=' + encodeURIComponent(query) + '&format=json');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results.bindings;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}


export async function executeQueryOSM(query) {
  const endpointUrl = 'https://overpass-api.de/api/interpreter';

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'data=' + encodeURIComponent(query)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
