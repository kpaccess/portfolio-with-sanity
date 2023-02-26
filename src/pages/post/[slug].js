import client from "../../lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function SinglePost({ post }) {
  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-6xl mb-4 text-black">
                {post.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <Image
                  src={urlFor(post.authorImage).url()}
                  alt={post.title}
                  height={200}
                  width={200}
                  className="w-10 h-10 rounded-full"
                />

                <p className="flex items-center pl-2 text-2xl">{post.name}</p>
              </div>
            </div>
          </div>
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            height={400}
            width={500}
            className="w-full object-cover rounded-top"
          />
        </header>
      </article>
      <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
        <BlockContent
          blocks={post.body}
          projectId="a8l96rip"
          dataset="production"
        />
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
    'slug': slug.current
  }`;
  const posts = await client.fetch(query);

  const paths =
    posts.map((post) => ({
      params: { slug: post.slug },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    'slug': slug.current,
    title,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body,
    "name": author->name,
    "authorImage": author->image
  }`;

  const options = { slug: params.slug };

  const post = await client.fetch(query, options);

  return {
    props: { post: post[0] },
  };
}

export default SinglePost;
