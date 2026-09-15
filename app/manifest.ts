import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DEV-TEE',
    short_name: 'DEV-TEE',
    description: 'DEV-TEE helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
