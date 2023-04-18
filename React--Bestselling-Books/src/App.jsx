import "./App.css";
import EventExample from './EventExample';
import bookArray from './books';
import Book from './Book';





function App() {
  const getBook = (id) => {
    const book = bookArray.find(book => book.id === id)  
    console.log(book)
  }
  return (
    <section className="booklist">
      {
        bookArray.map((book) => {
          const {id, img, title, author} = book

          return (
            <Book key={id} img={img} title={title} author={author} getBook={getBook}/>
          )
        })}
    </section>
  );
}



export default App;
