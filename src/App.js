import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import HomeSection1 from './HomeSection1';
import SideNav from './SideNav';
import ContentContainer from './ContentContainer';
import Content from './Content';

function App() {
  return (
    <>
      <div className='body pt-2'>
        <div className='fixed-top'>
          <SideNav homeTextStyle='home-text mt-1' homeIconDivStyle='me-4 home-icon-div'/>
          <Nav />
        </div>
          <Content />
      </div>
    </>
  );
}

export default App;
