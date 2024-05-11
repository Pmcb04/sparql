export const cities_bigger_spain = `
    # Get the top 10 largest cities in Spain by area
    
    SELECT DISTINCT ?cityLabel (MAX(?area) AS ?maxArea)
    WHERE {
        ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filter entities that are instances of cities
              wdt:P17 wd:Q29 ;               # Filter cities located in Spain
              wdt:P2046 ?area ;              # Get the area of the city
              rdfs:label ?cityLabel .        # Get the name of the city
        FILTER(LANG(?cityLabel) = "en")      # Filter city names in English
    }
    GROUP BY ?cityLabel
    ORDER BY DESC(?maxArea)                # Sort cities by maximum area in descending order
    LIMIT 10                               # Limit the result to the top 10 cities
`;


export const cities_population_spain = `
    # Get the top 20 most populous cities in Spain
    
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
    LIMIT 20                               # Limit the result to the top 20 cities
`;

export const cities_highest_green_areas = `
    # Get the top 10 cities in Spain with the highest percentage of green areas
    
    SELECT ?cityLabel ((?greenArea / ?totalArea) AS ?greenAreaPercentage) WHERE {
        ?city wdt:P31/wdt:P279* wd:Q515 ; 
              wdt:P17 wd:Q29 ;               # Filter cities located in Spain
              wdt:P2046 ?totalArea ;         # Get the total area of the city
              wdt:P31/wdt:P279* wd:Q2221906 ;# Filter entities that are instances of green areas
              wdt:P2046 ?greenArea ;        # Get the area of green areas
              rdfs:label ?cityLabel .       # Get the name of the city
        FILTER(LANG(?cityLabel) = "en")     # Filter city names in English
    }
    ORDER BY DESC(?greenAreaPercentage)     # Sort cities by the highest percentage of green areas
    LIMIT 10                                # Limit the result to the top 10 cities
`;

export const diferent_population_spain_italy = `
# Count the number of squares in the cities with the highest population in Spain and Italy
SELECT ?countryLabel ?cityLabel ?population
WHERE {
  {
    SELECT ?city ?cityLabel ?population
    WHERE {
      ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filter entities that are instances of cities
            wdt:P17 wd:Q29 ;               # Filter cities located in Spain
            wdt:P1082 ?population ;        # Get the population of the city
            rdfs:label ?cityLabel .        # Get the name of the city
      FILTER(LANG(?cityLabel) = "en")      # Filter city names in English
    }
    ORDER BY DESC(?population)             # Sort cities by population in descending order
    LIMIT 1                                 # Limit the result to the city with the highest population in Spain
  }
  UNION
  {
    SELECT ?city ?cityLabel ?population
    WHERE {
      ?city wdt:P31/wdt:P279* wd:Q515 ;    # Filter entities that are instances of cities
            wdt:P17 wd:Q38 ;               # Filter cities located in Italy
            wdt:P1082 ?population ;        # Get the population of the city
            rdfs:label ?cityLabel .        # Get the name of the city
      FILTER(LANG(?cityLabel) = "en")      # Filter city names in English
    }
    ORDER BY DESC(?population)             # Sort cities by population in descending order
    LIMIT 1                                 # Limit the result to the city with the highest population in Italy
  }
}

`

export const historical_population_badajoz = `
# Get the historical population of Badajoz
SELECT ?year ?population
WHERE {
  wd:Q15679 p:P1082 ?statement.
  ?statement pq:P585 ?time;
             ps:P1082 ?population.
  BIND(year(?time) as ?year)
}
ORDER BY ?year
`