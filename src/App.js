import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter,Route,Switch,Routes } from "react-router-dom";
// import App1 from './react/reactFunction';
// import App2 from './react/reactClass';
// import PropsFunction from './react/propsFunction';
// import Hooks from './react/hooksCountNumber';
 import Timer from './react/classPresentTimeHooks';
// import PresentDate from './react/presentDay';
 import Rendering from './react/renderings';
import Form from './react/normalForm';
// import Rout from './react/routing';
import Navbar from './react/navigation';
import Home from './react/routing/home';
import About from './react/routing/about';
import Dashboard from './react/routing/dashboard';
import Map from './react/map';
import Filter from './react/routing/filter';
import Find from './react/find';
//import Crud from './react/crudOpertion';
import Cars from './react/carsTask';
import State from './react/state';
import TaskForm from './react/task.js/form';
import Address from './react/task.js/address';
import Crud from './react/task.js/crudForm';
import Qulification from './react/task.js/qualification';
import TaskNav from './react/task.js/routing';
import NavigationRouting from './taskRouting/navrouting';
import Nestead from './taskRouting/screen1';
import Nestead2 from './taskRouting/screen2';
import Parameter from './taskRouting/screen3';
import Nestead3 from './taskRouting/screen4';
import App1 from './taskRouting/screen5';
import Redux from './redux';
function App() {
  return (
    <>{/* <div className="App"> */}
  {/* function and class component in button */}
       {/* <App1/> 
        <App2/>  */}

  {/* props in function component */}
{/* 
      <PropsFunction name={"sai"}  email="sai@gmail.com"
      other={{adress:"hyderabad", mobile:"9999999999"}}/>

      <PropsFunction name={"sugar"} email="sugar@gmail.com"
      other={{adress:"vizag", mobile:"8888888888"}}/>

      <PropsFunction name={"live"} email="live@gmail.com"
      other={{adress:"goa", mobile:"6666666666"}}/> */}


      {/* hooks in function component */}
            {/* <Hooks/>

            <Timer/>
            <PresentDate/>
             */}
    
    {/* <Rendering/>  */}

            {/* normal Form */}
           {/* <Form/> */}
            

           {/* Routing to one hyperLink */}
          
    {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/timer"   element={<Timer/>}/>
        <Route path="/form"  element={<Form/>}/>
      </Routes>
      </BrowserRouter> */}

      {/* Map functionality */}
      {/* <Map/> */}


          {/* Filter functionality */}
          {/* <Filter/> */}

          {/* find functionality */}
          {/* <Find/> */}

          {/* Crud Operation */}
          {/* <Crud/> */}

          {/* <Cars/> */}

          <State/>

          {/* <TaskForm/> */}
         
          {/* <Crud/><br/>

          <Address/><br/>

          <Qulification/> */}

           {/* <BrowserRouter>
      <TaskNav/>
      <Routes>
        <Route path="/crud" exact element={<Crud/>}/>
        <Route path="/address"   element={<Address/>}/>
        <Route path="/qulification"  element={<Qulification/>}/>
      </Routes>
      </BrowserRouter> */}


      {/* <TaskForm/> */}


        {/*  </div> */}
      {/* <BrowserRouter>
        <NavigationRouting/>
        <Routes>
        <Route path="home" exact element={<Nestead/>}/>
        <Route path="screen2" exact element={<Nestead2/>}/>
        <Route path="screen3/:id" exact element={<Parameter/>}/>
        <Route path="screen4" exact element={<Nestead3/>}/>
        <Route path="screen4/form" exact element={<Form/>}/>
        <Route path="screen4/grid" exact element={<Crud/>}/>
        <Route path="screen5/:id" exact element={<App1/>}/>
        <Route path=''/>
      </Routes>
      </BrowserRouter> */}

      {/* <Redux/> */}
        
        </>

  );
}

export default App;
