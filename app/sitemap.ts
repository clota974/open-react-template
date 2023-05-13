import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mysnack.re',
      lastModified: new Date(),
    },
    {
      url: 'https://www.mysnack.re',
      lastModified: new Date(),
    },
  ];
}