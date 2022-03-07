import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App-container">
      <div class="col">SIGN UP
        <form>
          <input type='text' placeholder='Please Enter Username' />
          <input type='email' placeholder='Please Enter your Email'/>
          <input type='password' placeholder='Please Enter Password'/>
          <input type='confirm' placeholder='Please Repeat Password'/>
        </form>
      </div>
      <div class="col">SAVED LIST</div>
    </div>
  );
}

export default App;
