import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Header from './header/header.component';
// import Main from '../src/components/main/main.component';
import Footer from './footer/footer.component';

class App extends React.Component {
render() {
  return (
    <div >
      <div className="App">
      <Header/>
      </div>
        
        {/* <Switch> */}
          {/* <Route exact path='/' component={Main} /> */}
          {/* <Route path='/resume' component={Resume}/> 
          <Route path='/projects' component={Projects} />
          <Route path='/blogs' component={Blogs}/> */}
          
        {/* </Switch> */}
        <Footer/>    
      </div>
    );
  }
}

export default App;