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