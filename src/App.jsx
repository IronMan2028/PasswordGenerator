// import { useState , useCallback, useEffect, useRef} from 'react'



// function App() {
//  const [length,setLength]=useState(0);
//  const [numberAllow, setNumberAllow]=useState(false);
//  const [charAllow, setCharAllow] = useState(false);
//  const [password,setPassword] = useState("");
 
//  const passwordRef = useRef(null);


//  const copyPasswordClipBoard=useCallback(()=>{
//   passwordRef.current?.select()
//   passwordRef.current?.setSelectionRange(0,12)
//   window.navigator.clipboard.writeText(password)
//  },[password])

// const passwordGenerator = useCallback(()=>{

//   let pass =""
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   if(numberAllow)str+="0123456789";
//   if(charAllow)str+="!@#$%^&*~`/*-+";

//   for(let i=1;i<=length;i++){
//     let char = Math.floor(Math.random()*str.length+1);
//     pass+= str.charAt(char);
//   }
//   setPassword(pass)

// },[length,numberAllow,charAllow,setPassword])

// useEffect(()=>{
//   passwordGenerator()
// },[length,numberAllow,charAllow,passwordGenerator])

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
//       <h1 className='text-4xl text-center text-white'>Password Generator </h1>
//          <div className='flex-shadow rounded-lg overflow-hidden mb-4'>

//           <input type="text" 
//           value={password}
//           className='outline-none w-full py-1 px-3'
//           placeholder='password'
//           readOnly
//           ref ={passwordRef}
//           />

//           <button 
//           onClick={copyPasswordClipBoard}
//           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//           >Copy</button>

//           </div>
//           <div className='flex text-sm gap-x-2'>
//             <div className='flex item-center gap-x-1'>
//               <input type="range" 
//                min={6}
//                max={100}
//                value={length}
//                className='cursor-pointer'
//                onChange={(e)=>{setLength(e.target.value)}}
//               />
//                <label >Length:{length}</label>
//             </div>

//             <div className='flex item-center gap-x-1'>
//               <input type="checkbox" 
//                defaultChecked={numberAllow}
//               id="numberInput"
//                onChange={()=>{
//                 setNumberAllow((prev)=>!prev)
//                }}
//               />
//                <label htmlFor='numberInput'>Number</label>
//             </div>

//             <div className='flex item-center gap-x-1'>
//               <input type="checkbox" 
//                defaultChecked={charAllow}
//               id="charInput"
//                onChange={()=>{
//                 charAllow((prev)=>!prev)
//                }}
//               />
//                <label htmlFor='charInput'>Character</label>
//             </div>

            
         
//          </div>

//       </div>
//     </>
//   )
// }

// export default App


import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState(12);
  const [numberAllow, setNumberAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*~`/*-+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-8 bg-gray-800 text-white">
        <h1 className="text-3xl text-center mb-6 font-bold">Password Generator</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-1 p-2 rounded-l bg-gray-700 text-white"
            placeholder="Generated password"
          />
          <button
            onClick={copyPasswordClipBoard}
            className="p-2 rounded-r bg-blue-600 hover:bg-blue-700 text-white"
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllow}
            onChange={() => setNumberAllow((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="charInput"
            checked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="charInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

