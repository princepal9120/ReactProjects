import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200" style={{
      backgroundColor: color
    }}>

      <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl">
<button onClick={()=>setColor("red")}
 className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "red"
}}>RED</button>
<button onClick={()=>setColor("black")} className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "black"
}}>black</button>
<button onClick={()=>setColor("orange")} className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "orange"
}}>ORANGE</button>
<button onClick={()=>setColor("burlywood")} className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "burlywood"
}}>BURLYWOOD</button>
<button onClick={()=>setColor("green")} className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "green"
}}>GREEN</button>
<button onClick={()=>setColor("brown")} className="outline-none px-4 py-2 rounded-full text-white shadow" style={{
  backgroundColor: "brown"
}}>BROWN</button>
</div>

      </div>
    </div>
  )
}

export default App
