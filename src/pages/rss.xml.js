import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../const';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/rss/1.0/modules/dc/',
    },
    customData: `<language>en-us</language>
      <atom:link href="${new URL('rss.xml', context.site)}" rel="self" type="application/rss+xml" />`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.author, "Flare Network", "Web3"],
      customData: `<dc:creator>${post.data.author}</dc:creator>`,
    })),
  });
}
