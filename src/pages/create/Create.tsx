import Link from "../../components/link/Link.tsx";

function Create() {
    return (
        <div className={"create"}>
            <h1>Create CV</h1>
            <Link to="/view" type={"button"}>View CV</Link>
        </div>
    );
}

export default Create;
