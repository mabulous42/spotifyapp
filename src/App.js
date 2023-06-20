import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import HomeSection1 from './HomeSection1';
import SideNav from './SideNav';

function App() {
  return (
    <>
      <div className='body pt-2'>
        <div className='w-100 fixed-top d-flex'>
          <SideNav />
          <Nav />
        </div>
        {/* <HomeSection1 /> */}
      </div>
    </>
  );
}

export default App;
