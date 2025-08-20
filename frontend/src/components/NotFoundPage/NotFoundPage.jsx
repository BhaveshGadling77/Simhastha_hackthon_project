import { Link } from "react-router";
function NotFoundPage() {
    return (
        <div className="text-center align-middle justify-center bg-[212121]">
            <h1 className="text-center text-red-500">Page Not Found</h1>
            <Link to={"/"}>
                <button> Go Back to Home</button>
            </Link>
        </div>
    );
}
export default NotFoundPage;
