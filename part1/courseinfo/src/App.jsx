
const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 

return (
   <div> 
     <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
</div>


)
}

const Header = ({ course }) => {
return <h1>{course.name}</h1>
}

const Content = (props) => {
return ( <div> {props.parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))} </div>
)
}

const Total = (props) => {
const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
return ( <p>
Number of exercises {totalExercises} </p>
)
}

export default App
