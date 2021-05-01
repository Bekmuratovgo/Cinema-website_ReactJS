import React from 'react';
import Routes from './Routes'
import './App.css'
import TodoContextProvider from './context/TopicContext';

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App"><input type="text" placeholder="Search..." /> 
    
      <Routes />
=======
    <div>
      {/* <Routes /> */}
      <TodoContextProvider>
          <Routes />
        </TodoContextProvider>
>>>>>>> debb467081219858a4d0419a9538242bec18e832
    </div>
  );
};

export default App;
