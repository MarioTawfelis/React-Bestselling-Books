function Book({ id, img, title, author, getBook }) {
    return (
      
        <article className="book">
          <img src={img} alt={title}/>
          <h2>{title}</h2>
          <h4>{author}</h4>
          <button onClick={() => getBook(id)}>Buy</button>
        </article>  
      
  
    );
  }

  export default Book