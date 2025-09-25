import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/Logo.png" className="App-logo" alt="logo" />
          {/* Navigation Menu  */}
          <div> 
            <ul className='MenuLinks'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <button className='WalletButton'>Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
