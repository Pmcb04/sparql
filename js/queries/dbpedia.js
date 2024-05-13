
export const map_london = `
# Get the geographical coordinates of London

PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?lat ?long ?placeLabel
WHERE {
  ?place rdf:type dbo:Place ;            
         rdfs:label ?placeLabel ;        
         dbo:location ?location .        
  ?location geo:lat ?lat ;               
            geo:long ?long .             
  
  FILTER(LANG(?placeLabel) = "en" && CONTAINS(?placeLabel, "London"))
}
`

export const distiric_more_population_spain = `
# Get the districts in Spain with the highest population density
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>

SELECT ?cityLabel ((?population / ?area) AS ?populationDensity)
WHERE {
  ?city a dbo:City ;
        rdfs:label ?cityLabel ;
        dbo:populationTotal ?population ;
        dbo:areaTotal ?area ;
        dbo:country dbr:Spain .
  FILTER (lang(?cityLabel) = 'es')
}
ORDER BY DESC(?populationDensity)
LIMIT 20
`

export const distiric_less_population_spain = `
# Get the districts in Spain with the lowest population density
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>

SELECT ?cityLabel ((?population / ?area) AS ?populationDensity)
WHERE {
  ?city a dbo:City ;
        rdfs:label ?cityLabel ;
        dbo:populationTotal ?population ;
        dbo:areaTotal ?area ;
        dbo:country dbr:Spain .
  FILTER (lang(?cityLabel) = 'es')
}
ORDER BY ?populationDensity
LIMIT 20
`

export const count_musuems_spain = `
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?city ?cityLabel (COUNT(?museum) AS ?museumCount)
WHERE {
  ?museum a dbo:Museum ;
          dbo:location/dbo:country <http://dbpedia.org/resource/Spain> ;
          dbo:location ?city .
  ?city a dbo:City ;
        rdfs:label ?cityLabel .
}
GROUP BY ?city ?cityLabel
ORDER BY DESC(?museumCount)
`

export const monuments_spain = `
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

SELECT ?monument ?monumentLabel ?lat ?long
WHERE {
  ?monument a dbo:Monument ;
            dbo:location/dbo:country <http://dbpedia.org/resource/Spain> ;
            rdfs:label ?monumentLabel .
  OPTIONAL {
    ?monument geo:lat ?lat ;
              geo:long ?long .
  }
  FILTER(langMatches(lang(?monumentLabel), "en"))
}

`