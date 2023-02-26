import Link from "next/link";
import Image from "next/image";
import client from "../../lib/client";

const Post = ({ posts }) => {
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center text-black">
          Blog Post Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            console.log(post);
            return (
              <>
                <article>
                  <Link
                    href={`/post/${post.slug.current}`}
                    key={`{post.slug.current}-{index}`}
                  >
                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
                      <Image
                        src={post.mainImage.asset.url}
                        width={500}
                        height={500}
                        alt=""
                        loader=""
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className=" relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 bg-opacity-75 ">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"] {
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
        body
    }
    `);

  return {
    props: {
      posts,
    },
  };
}

export default Post;
