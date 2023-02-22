const Tile = ({ image: { src, alt }, Content, Footer, tileStyle }) => {
    return (
        <div className={`card h-100 ${tileStyle}`}>
            <img src={src} className="card-img-top" alt={alt} />
            <div className="card-body">
                {Content && (
                    <Content />
                )}
            </div>
            {Footer && (
                <div className="card-footer">
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Tile;
