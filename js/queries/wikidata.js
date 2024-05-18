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
# Count the number of populations in the cities with the highest population in Spain and Italy
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

export const historical_people_birthday_spain = `
SELECT DISTINCT ?personLabel ?birthdate
WHERE {
  ?person wdt:P31 wd:Q5 ;
          wdt:P27 wd:Q29 ;  # Spain as country of birth
          wdt:P569 ?birthdate .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 30
`

export const historical_writters_birthdays_spain = `
SELECT DISTINCT ?personLabel ?birthdate
WHERE {
  ?person wdt:P31 wd:Q5 ;
          wdt:P27 wd:Q29 ;  # Spain as country of birth
          wdt:P569 ?birthdate ;
          wdt:P106 wd:Q36180 .  # Writer as occupation
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 30

`

export const univertities_more_olders_europe = `
SELECT ?university ?universityLabel ?inception ?latitude ?longitude
WHERE {
  ?university wdt:P31 wd:Q3918 ; # Instance of university
              wdt:P571 ?inception ; # Date of foundation
              wdt:P17 ?country ; # Located in a country
              p:P625 ?coordinateLocation . # Geographical coordinates
  ?coordinateLocation psv:P625 ?coordinateNode .
  ?coordinateNode wikibase:geoLatitude ?latitude ;
                  wikibase:geoLongitude ?longitude .
  ?country wdt:P30 wd:Q46 . # In Europe
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY ?inception 
LIMIT 100
`

export const european_scientists_with_more_publications = ` 
SELECT ?scientist ?scientistLabel (COUNT(?publication) AS ?publicationCount)
WHERE {
  ?scientist wdt:P31 wd:Q5 ; # Intance of person
             wdt:P27 ?country ; # Country
             wdt:P800 ?publication . # Have publications
  ?country wdt:P30 wd:Q46 . # In Europe
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
GROUP BY ?scientist ?scientistLabel
ORDER BY DESC(?publicationCount)
LIMIT 50

`

export const building_more_highest = `
SELECT ?building ?buildingLabel ?height
WHERE {
  ?building wdt:P31 wd:Q41176 ; # Instance of building
            wdt:P2048 ?height . # High
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY DESC(?height)
LIMIT 30

`

export const cities_european_with_more_languages = `
SELECT ?city ?cityLabel (COUNT(?language) AS ?numLanguages) ?population WHERE {
  ?city wdt:P31 wd:Q515;            # Instancia de ciudad
        wdt:P17 ?country;           # País
        wdt:P1082 ?population;      # Población
        wdt:P37 ?language.          # Idiomas oficiales
  ?country wdt:P30 wd:Q46.          # Continente Europa
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
GROUP BY ?city ?cityLabel ?population
ORDER BY DESC(?numLanguages)
LIMIT 100

`

export const museum_per_european_cities = `
SELECT ?city ?cityLabel ?population ?museumsPer100k WHERE {
  ?city wdt:P31 wd:Q515;                      # Instancia de ciudad
        wdt:P17 ?country;                     # País
        wdt:P1082 ?population.                # Población total
  ?country wdt:P30 wd:Q46.                    # Continente Europa

  {
    SELECT ?city (COUNT(?museum) AS ?numMuseums) WHERE {
      ?museum wdt:P31 wd:Q33506;              # Instancia de museo
              wdt:P276 ?city.                 # Ubicación en la ciudad
    }
    GROUP BY ?city
  }

  BIND((?numMuseums / ?population) * 100000 AS ?museumsPer100k)

  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
ORDER BY DESC(?museumsPer100k)
LIMIT 100
`