
import './App.css';
import { inceraseNum,deceraseNum } from './action/indax';
import{useDispatch,useSelector} from  'react-redux';

function App() {
  const dispatch=useDispatch();
  const val = useSelector((state)=>state.UpDown)
  return (
    <div className="App">
      {val}

      <br></br>
      <input type="button" value="increment" onClick={()=>{dispatch(inceraseNum())}}></input>
      <input type="button" value="Decrement" onClick={()=>{dispatch(deceraseNum())}}></input>
      <br></br>





    </div>
  );
}

export default App;
