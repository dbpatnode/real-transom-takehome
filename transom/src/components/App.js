import React from 'react';
import Header from './header/header.component';
import MainContainer from './main/main-container.component';
import Footer from './footer/footer.component';

class App extends React.Component {
render() {
  return (
    <div >
      <div className="App">
      <Header/>
      <MainContainer />
      </div>
      <Footer/>    
    </div>
    );
  }
}

export default App;