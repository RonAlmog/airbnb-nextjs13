/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  reactStrictMode: true,
  env: {
    mapbox_key:
      "pk.eyJ1Ijoicm9uYWxtb2ciLCJhIjoiY2s5NHNnMmtrMDNsNDNlcXZ5OHkyY3plNiJ9.N_o-1sMyry8hKZTDsL0mAA",
  },
};

module.exports = nextConfig;
