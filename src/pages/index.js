import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="https://images.unsplash.com/photo-1583364512105-951b6f7080ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="User profile picture"
        width={1300}
        height={1300}
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen p-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold lg:leading-snug uppercase">
          Hello. I&apos;m Krishna.
        </h1>
      </section>
    </main>
  );
}
