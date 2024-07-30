function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[rgb(36,36,223)] to-[rgb(7,7,166)]">
      <div className="p-5 rounded-lg bg-white">
        <form action="" className="">
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="text"/>
          </div>
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="AC" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="DE" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="." />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="/" />
          </div>
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="7" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="8" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="9" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="*" />
          </div>
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="4" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="5" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="6" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="+" />
          </div>
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="1" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="2" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="3" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="-" />
          </div>
          <div>
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="0" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="00" />
            <input className="border-none outline-none w-14 h-14 text-lg bg-[rgb(91,91,151)] m-0.5" type="button" value="=" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
