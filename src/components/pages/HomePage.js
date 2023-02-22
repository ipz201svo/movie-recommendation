import { Layout } from "../layout";
import Carousel from "../carousel/Carousel";
import MoviePicker from "../moviePicker/MoviePicker";
import RecentMovies from "../recentMovies/RecentMovies";
import { useEffect } from "react";
import { loadRecentMovies } from "../../behavior/recentMovies";
import { useDispatch } from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRecentMovies(3));
    }, []);

    return (
        <Layout>
            <Carousel />
            <RecentMovies />
            <MoviePicker />
        </Layout>
    );
};

export default HomePage;
