import { useRouter } from "next/router";
import requests from "../utils/requests";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center gap-7 h-10 overflow-scroll scrollbar-hide md:gap-9 lg:justify-around pl-7 md:pl-10  last:pr-10 md:last:pr-20">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`/?genre=${key}`)}
          key={key}
          className="whitespace-nowrap hover:text-white active:text-red-500 transition transform hover:scale-125"
        >
          {title}
        </h2>
      ))}
      <div className="w-1/12 h-10 absolute right-0 bg-gradient-to-l from-[#06202A]"></div>
    </nav>
  );
}
