export const restaurants_caceres = `
[out:json][timeout:25];
(
  node["amenity"="restaurant"](area:3600000000);
  node(39.4500, -6.4300, 39.5000, -6.3600)["amenity"="restaurant"];
);
out body;
>;
out skel qt;
`

export const hotels_caceres = `
[out:json][timeout:25];
(
    node["tourism"="hotel"](area:3600000000);
    node(39.4500, -6.4300, 39.5000, -6.3600)["tourism"="hotel"];
);
out body;
>;
out skel qt;
`
// To see more examples of queries, visit:
// https://wiki.openstreetmap.org/wiki/SPARQL_vs_Overpass_QL_examples#:~:text=SPARQL%20has%20functions%20for%20matching,a%20filter%20for%20regular%20expressions.