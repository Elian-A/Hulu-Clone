import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="p-4 grid justify-center md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:justify-start flex-wrap">
      {results.map((result) => (
        <div>
          <Thumbnail key={result.id} result={result} />
        </div>
      ))}
    </div>
  );
}

export default Results;
