# Queries SPARQL

# The 10th more bigger cities in Spain

```SQL
// SPARQL query to obtain the 10 largest cities in Spain without duplicates
SELECT DISTINCT ?cityLabel (MAX(?population) AS ?maxPopulation)
WHERE {
  ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filter entities that are instances of cities
        wdt:P17 wd:Q29 ;               # Filter cities located in Spain
        wdt:P1082 ?population ;        # Get the population of the city
        rdfs:label ?cityLabel .        # Get the name of the city
  FILTER(LANG(?cityLabel) = "en")      # Filter city names in English
}
GROUP BY ?cityLabel
ORDER BY DESC(?maxPopulation)          # Sort cities by maximum population in descending order
LIMIT 10                               # Limit the result to the top 10 cities

```
