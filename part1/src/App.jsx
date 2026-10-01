/*
const Suma = (props) => {
  return (
    <div>
      <p>The sum is {props.a + props.b}</p>
    </div>
  )
}
const App = () =>  {
  let name = 'Misael'
  console.log(`Hello my name is ${name}`)
  return (
    <div>
      <p>Hello {name}</p>
      <Suma a={5} b={10} />
    </div>
  )
}

export default App */

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} is {friends[0].age} years old</p>
      <p>{friends[1].name} is {friends[1].age} years old</p>
    </div>
  )
}

export default App
