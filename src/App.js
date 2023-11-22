import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MyApp from './component/Change';



function App() {
  return (
    <div>
    <header>
      <h1>Skelbimu puslapis</h1>
    </header>
    <section>
      <div className='adsAdds'>
        <MyApp/>
        <MyApp/>
      </div>
      <div className='adsAdds'>
        <MyApp/>
        <MyApp/>
      </div>
      <div className='adsAdds'>
        <MyApp/>
        <MyApp/>
      </div>
    
    </section>

    </div>
  );
}

export default App;
