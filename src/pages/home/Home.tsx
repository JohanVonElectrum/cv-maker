import Link from "../../components/link/Link";
import "./Home.css";

function Home() {
    return (
        <div className={"home"}>
            <h1>CV Maker</h1>
            <Link to="/create" type="button">Create CV</Link>
        </div>
    );
}

export default Home;
