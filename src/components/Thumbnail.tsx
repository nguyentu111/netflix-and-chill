import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom.";
import { Movie } from "../config/typings";

interface Props {
  movie: Movie;
  // movie: Movie | DocumentData; //using firebase
}
function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  // const [movie, setmovie] = useState<Movie | null>(null);
  const handleClick = () => {
    setCurrentMovie(movie);
    setShowModal(true);
  };
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer duration-200 ease-out 
        md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={handleClick}
    >
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
}

export default Thumbnail;
