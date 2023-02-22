import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div className="bg-dark">
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
