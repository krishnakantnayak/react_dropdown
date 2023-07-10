
import Dropdown from './Dropdown'
function App() {
  const options=["Yes","Probably Not"];
  return (
    <div className="App">
      <Dropdown Options={options}/>
    </div>
  );
}

export default App;
