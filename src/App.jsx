function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[rgb(36,36,223)] to-[rgb(7,7,166)]">
      <div className="p-5 rounded-lg bg-white">
        <form action="" className="">
          <div className="">
            <input type="text" className="w-full mb-3" />
          </div>
          <div>
            <input type="button" value="AC" />
            <input type="button" value="DE" />
            <input type="button" value="." />
            <input type="button" value="/" />
          </div>
          <div>
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" value="*" />
          </div>
          <div>
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" value="+" />
          </div>
          <div>
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" value="-" />
          </div>
          <div>
            <input type="button" value="00" />
            <input type="button" value="0" />
            <input type="button" value="=" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
