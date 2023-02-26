import client from "../../lib/client";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

import novaScotia from "../../assets/nova_scotia.png";
import urlFor from "@/lib/urlFor";

function About({ author }) {
  if (!author) {
    return <div>Loading ...</div>;
  }
  const authorData = author[0];

  console.log(authorData);

  return (
    <main className="relative ">
      <Image src={novaScotia} alt="Nova Scotia" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <Image
            src={urlFor(authorData.authorImage).url()}
            alt={authorData.name}
            width={200}
            height={200}
            className="rounded w-32 h-32 lg:w-64 lg:h-64m r-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I&lsquo;m{" "}
              <span className="text-green-100">{authorData.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent blocks={authorData.bio} dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "author"]{
    name,
    bio,
    "authorImage": image.asset->url
  }`;
  const author = await client.fetch(query);
  return {
    props: {
      author,
    },
  };
}

export default About;
