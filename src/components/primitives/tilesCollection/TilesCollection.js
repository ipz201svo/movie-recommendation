import Tile from "./Tile";

const TilesCollection = ({ tiles, tileStyle }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {tiles.map((t, i) => (
                <div className="col" key={i} >
                    <Tile tileStyle={tileStyle} Content={t.content} Footer={t.footer} image={t.image} />
                </div>))}
        </div>
    );
};

export default TilesCollection;
