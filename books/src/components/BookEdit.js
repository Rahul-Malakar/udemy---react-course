import { useState } from "react";
import useBooksContext from '../hooks/use-books-context'



function BookEdit({book, onSubmit}){

    const [title, setTitle] = useState(book.title);
    const {editBookById} = useBooksContext()

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit()
        editBookById(book.id, title);
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit} action="" className="book-edit">
                <label htmlFor="">Title</label>
                <input value={title} onChange={handleChange} className="input" type="text" />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;