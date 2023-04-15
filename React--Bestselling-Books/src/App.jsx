import "./App.css";


const bookArray = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear"
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/41X65pro2mS._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    title: "The Wasp Factory",
    author: "Iain Banks"
  }

]

function App() {
  return (
    <section className="booklist">
      {
        bookArray.map((book) => {
          const {id, img, title, author} = book

          return (
            <Book key={id} img={img} title={title} author={author}/>
          )
        })}
    </section>
  );
}

function Book({ img, title, author }) {
  return (
    <article className="book">
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

export default App;
