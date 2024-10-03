import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    return (
        <div className="container">
            <div className="col-12 d-flex justify-content-center align-items-center vh-100">
                <div id="error-page" className="text-center" style={{ color: '#fefefe' }}>
                    <h1 style={{ color: '#fefefe' }}>
                    {error.status == "404" ? "404 Page Not Found" : ""}
                        {/* 404 | This page could not be found. */}
                    </h1>
                    {/* <Link className='btn btn1' to="/" style={{ left: '35%' }}>Return</Link> */}
                </div>
            </div>
        </div>
    );
}

export default NotFound;
