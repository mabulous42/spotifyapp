import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import HomeSection1 from './HomeSection1';
import SideNav from './SideNav';
import ContentContainer from './ContentContainer';

function App() {
  return (
    <>
      <div className='body pt-2'>
        <div className='fixed-top'>
          <SideNav />
          <Nav />
        </div>
          <ContentContainer />
      </div>
    </>
  );
}

export default App;
