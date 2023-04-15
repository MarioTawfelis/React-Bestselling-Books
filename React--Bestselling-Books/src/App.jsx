import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  const title = "Atomic Habits"
  const author = "James Clear"
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        alt="Atomic Habits by James Clear"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

export default App;
