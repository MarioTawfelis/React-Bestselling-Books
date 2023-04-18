const ExampleEvent = () => {
    const handleChange = (e) => {
      console.log(e.target)
    }
  
    const handleClick = (e) => {
      console.log(e.target)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form submitted", e)
    }
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Some Form</h2>
          <input
            type='text'
            name='example'
            onChange={handleChange}
            style={{margin: '1rem 0'}}/>
        </form>
        <button onClick={handleClick}>Click Me!</button>
      </section>
    )
  }

  export default ExampleEvent