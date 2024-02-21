import { Link } from "react-router-dom"


export const NotFoundPage = () => {
    return (
        <div className="flex flex-col gap-2">
            404 Not Found
            <Link to="/">Home from link</Link>
        </div>
    )
}
