import { useEffect } from 'react'
import {testQuizOutput} from '../utils/api';
import './App.css'

function App() {
  useEffect(() => {
    const fetchData = async () =>{
    await testQuizOutput();
    };
    fetchData();
  }, []);
  
  return (
    <>
      <p>Hello Robert!</p>
      
    </>
  )
}

export default App
