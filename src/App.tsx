import { RootState } from "./app/store";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from "./features/webTheme/themeSlice";
const App = () => {
  const theme=useSelector((state: RootState) => state.theme.value)

  const containerStyle = {
    background: theme ? 'white' : 'black',
    color: theme ? 'black' : 'white',
    minHeight: '100vh',
    transition: 'background 0.3s, color 0.3s', 
  };
  
  const dispatch=useDispatch()
  return (
    <div style={containerStyle} className="flex items-center justify-center" >
      <div>
      <h2 >React Developer</h2>
       
       <button onClick={()=>dispatch(increment())}>Toggle</button>
      </div>
    </div>
  );
};

export default App;