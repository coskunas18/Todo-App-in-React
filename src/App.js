import Input from './component/Input';
import Header from  './component/Header';
import ListContent from './component/ListContent';
import { useSelector } from 'react-redux';

function App() {
  const {todoList,todoFilter} =useSelector((state)=>state.todo)
  console.log(todoList,todoFilter)
  return (
    <div className="md:container md:mx-auto">
     <Header>
      <Input/>
      <div className='mt-12'>
      <ListContent/>
      </div>

     </Header>
  
    </div>
  );
}

export default App;
