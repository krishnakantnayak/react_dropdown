
import Dropdown from './Dropdown'
function App() {
  //below arrays is the dropdown values array 
  const options=["Yes","Probably Not"];
  return (
    <div className="App">
      {/*passed as props to dropdown component*/}
      <Dropdown Options={options}/>
    </div>
  );
}

export default App;
