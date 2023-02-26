import Link from "next/link";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  const router = useRouter();
  return (
    <header className="bg-red-600 ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link
            className={
              router.pathname === "/"
                ? "inline-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest bg-red-700 underline"
                : "inline-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest "
            }
            href="/"
          >
            Krishna
          </Link>
          <Link
            href="/about"
            className={
              router.pathname === "/about"
                ? "bg-red-700 underline inline-flex items-center py-3 px-3 my-6"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            About
          </Link>
          <Link
            href="/project"
            className={
              router.pathname === "/project"
                ? "underline bg-red-700 inline-flex items-center py-3 px-3 my-6"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Project
          </Link>
          <Link
            href="/post"
            className={
              router.pathname === "/post"
                ? "underline bg-red-700 inline-flex items-center py-3 px-3 my-6"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Post
          </Link>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/pradhankrishna/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/kpaccess"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
