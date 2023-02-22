import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { TilesCollection } from "../primitives/tilesCollection";


const RecentMovies = () => {
  const movies = useSelector(state => state.recentMovies.movies);
  const tiles = movies.map(m => {
    const image = { src: m.pictureUrl, alt: m.title };
    const footer = () => (<>
      <div className="d-flex align-items-center"><BsStar /> {m.rating}</div>
      <Link to={`/movies/${m.id}`} className='stretched-link text-decoration-none text-reset'>
        <h5 className="card-title">{m.title}</h5>
      </Link>
    </>);
    return {
      image,
      footer
    }
  })
  return (
    <div className="container mt-3">
      <h2 className="text-light">Recent movies</h2>
      <TilesCollection tileStyle="text-white bg-black" tiles={tiles} />
    </div>
  );
};

export default RecentMovies;
