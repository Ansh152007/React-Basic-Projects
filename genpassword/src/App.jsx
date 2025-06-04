import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const passwordRef = useRef(null)
  const [copiedornot, setcopiedornot] = useState("Copy")
  const generatepassword = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      string += "0123456789"
    }
    if(charAllowed){
      string += "!@#$%^&*"
    }

    for(let i =0; i<length; i++){
      let char = Math.floor(Math.random() * string.length)
      pass += string.charAt(char)
    }

    setpassword(pass)
  },[ length, numberAllowed, charAllowed])

  
  useEffect(() => {
    generatepassword()
  }, [length,charAllowed,numberAllowed,generatepassword])
  

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password)
    setcopiedornot("Copied !")
    window.alert("Copied !")
    setTimeout(() => {
      setcopiedornot("Copy")
      
    }, 3000);
  }
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto bg-gray-700 rounded-2xl h-96 mt-4 drop-shadow-2xl mb-4">
        <h1 className="text-2xl font-bold text-white">Password Generator</h1>
        <div className="flex justify-center items-center mt-4">
          <input
            type="text"
            value={password}
            className="bg-gray-300 rounded-l-xl px-2 py-1 outline-none w-96"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={handleCopy} 
          className="bg-amber-600 px-2 py-1 rounded-r-xl text-blue-950 cursor-pointer">
            {copiedornot}
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="flex justify-center items-center mt-2 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer outline-none"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="ml-2 text-white" htmlFor="length">
              {" "}
              Length : {length}
            </label>
          </div>
            <div className="flex justify-center items-center ml-2 mt-2">
              <input
                type="checkbox"
                checked= {numberAllowed}
                onChange={() => {
                  setnumberAllowed((prev) =>
                    !prev
                  );
                }}
              />
              <label className="ml-2 text-white" htmlFor="numberAllowed">
                Number
              </label>
            </div>
            <div className="flex justify-center items-center ml-2 mt-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => {
                  setcharAllowed((prev) => 
                    !prev
                  );
                }}
              />
              <label className="ml-2 text-white" htmlFor="charAllowed">
                Character
              </label>
            </div>   
        </div>
      </div>
    </>
  );
}

export default App;
