import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (  
    <div className='bg-gray-950 min-h-screen '>
      <div className='p-8 container mx-auto'>
      <AddTodo />
      <Todos />
      </div>
    </div>
  )
}

export default App