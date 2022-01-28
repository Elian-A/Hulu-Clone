import { Header, Navbar, Results } from "../components";
import requests from "../utils/requests";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <Navbar />
      <Results results={props.res} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre].url || requests.fetchTrending.url
      }`
    ),
    response = await req.json();

  return { props: { res: response.results } };
}
