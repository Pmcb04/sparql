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