import { Link } from "react-router-dom"

export default function BookList() {
    return (
        <>
            <h1>Book List</h1>
            <Link to="/books/1"> Book 1</Link>
            <br />
            <Link to="/books/2"> Book 2</Link>
             <br />
            <Link to="/books/aloalo"> Book 3</Link>
            <br />
            <Link to="/books/new"> New Book</Link>
        </>
    )
}