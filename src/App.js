import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';


function App() {
  return (
    <>
         <Navbar title= "TextUtils"/>

         <div className="container">
         
         <TextForm heading= "Enter the text to analyze"/>
         </div>

    
    </>
  );
}

export default App;