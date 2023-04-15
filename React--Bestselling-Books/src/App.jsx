import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book
        img="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        title="Atomic Habits"
        author="James Clear"
      />
      <Book
        img="https://m.media-amazon.com/images/I/41X65pro2mS._SY291_BO1,204,203,200_QL40_ML2_.jpg"
        title="The Wasp Factory"
        author="Iain Banks"
      />
    </section>
  );
}

function Book(props) {
  return (
    <article className="book">
      <img src={props.img} alt={props.title}/>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
}

export default App;
