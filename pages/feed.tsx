function generateFeed(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
  <channel>
   <title>RSS Title</title>
   <description>This is an example of an RSS feed</description>
   <link>http://www.example.com/main.html</link>
   <copyright>2020 Example.com All rights reserved</copyright>
   <lastBuildDate>Mon, 6 Sep 2010 00:01:00 +0000</lastBuildDate>
   <pubDate>Sun, 6 Sep 2009 16:20:00 +0000</pubDate>
   <ttl>1800</ttl>
   ${posts.map((post: any) => {
    return `<item>
    <title>${post.data.title}</title>
    <description><![CDATA[${post.content}]]></description>
    <link>http://localhost:8008/posts/${post.data.url}</link>
    <guid isPermaLink="false">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
    <pubDate>${post.data.date}</pubDate>
   </item>`
   })}
  </channel>
  </rss>`
}

export async function getServerSideProps({ res }: any) {
  const request = await fetch("http://localhost:8008/api/posts");
  const { posts } = await request.json();

  const feed = generateFeed(posts)

  res.setHeader('Content-Type', 'text/xml');

  res.write(feed);
  res.end();

  return {
    props: {},
  };
}

export default function Feed() {}
