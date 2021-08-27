import React from 'react';
import Header from './header/header.component';
import Main from './main/main.component';
import Footer from './footer/footer.component';

class App extends React.Component {
render() {
  return (
    <div >
      <div className="App">
      <Header/>
      <Main />
      </div>
      <Footer/>    
    </div>
    );
  }
}

export default App;