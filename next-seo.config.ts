import { NextSeoProps } from 'next-seo';
// https://github.com/garmeeh/next-seo
const nextSeoConfig: NextSeoProps = {
    title: 'Next.js SEO',
    description: 'SEO made easy with Next.js',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://www.example.com',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
        {
            url: 'https://www.example.com/image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
        },
        ],
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
}
export default nextSeoConfig;
