import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

function Thumbnail({ key, result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group">
      <div className="px-1 lg:max-w-lg 2xl:max-w-md grid py-1 transition  duration-200 ease-in-out sm:group-hover:scale-105 group-hover:z-10">
        <h2 className="text-white text-2xl pb-2 group-hover:font-bold">
          {result?.title || "No title found"}
        </h2>
        <div>
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="responsive"
            height={1080}
            width={1920}
          />
        </div>
        <p className="truncate">{result.overview} </p>
        <div className="flex sm:opacity-0 group-hover:opacity-100 items-center gap-2">
          {`${result.release_date}`}
          <p>⋇</p> <AiOutlineLike /> {`${result?.vote_count}`}
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
