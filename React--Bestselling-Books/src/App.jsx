import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
    alt="Atomic Habits by James Clear"
  />
);

const Title = () => <h2>Atomic Habits</h2>;
const Author = () => (
  <h4 style={{ color: "#617d98", marginTop: "0.5rem", fontSize: "0.85rem" }}>
    James Clear
  </h4>
);

export default App;
