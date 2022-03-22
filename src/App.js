import './App.css';
import Tab from './Components/Tab/Tab';



function App() {
  let tabArray = [
    {
      etiqueta : 'Tab 1',
      propiedad : 'Tab 1 content is showing here'
    },
    {
      etiqueta : 'Tab 2',
      propiedad : 'Tab 2 content is showing here'
    },
    {
      etiqueta : 'Tab 3',
      propiedad : 'Tab 3 content is showing here'
    }
  ];

  return (
    <div className="App">
      <Tab tabArray={ tabArray } />
    </div>
  );
}

export default App;
