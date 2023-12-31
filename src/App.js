import logo from './logo.svg';
import './App.css';
// import {Button} from 'antd'
import LearnGrid from './components/LearnGrid';
import LayoutDefault from './components/layout';
import {BrowserRouter, NavLink, Link, Routes, Route} from 'react-router-dom'
import Layout404 from './components/layout/layout404/Layout404';

function App() {
  return (
    <>
      
      {/* <LearnGrid /> */}
        <Routes>
          <Route path="/" element={<LayoutDefault />} >
            <Route path="/" element={<LearnGrid />}/>
           
            <Route path="*" element={<Layout404 />} />
          </Route>
          
          
        </Routes>
    </>
  );
}

export default App;
