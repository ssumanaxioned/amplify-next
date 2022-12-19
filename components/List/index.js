const List =({ data })=> {
  return (
    <div>
      <p>title: {data.title}</p>
      <p>description: {data.description}</p>
    </div>
  )
}

export default List;