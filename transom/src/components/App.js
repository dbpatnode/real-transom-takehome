import React from 'react';
import Header from './header/header.component';
import MainContainer from './main/main-container.component';
import FooterContainer from './footer/footer-container.component';


class App extends React.Component {
render() {
  return (
    <div >
      <div className="App">
      <Header/>
      <MainContainer />
      </div>
      <FooterContainer/>    
    </div>
    );
  }
}

export default App;