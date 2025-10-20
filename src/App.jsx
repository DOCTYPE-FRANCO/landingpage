import React from 'react'
import Homepage from './Components/Homepage'


function App() {


  return (
    <>
      <div className="min-h-screen w-full bg-white relative">
        {/*  Diagonal Cross Bottom Right Fade Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
            `,
            backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
          }}
        />
        {/* Your Content/Components */}
        <Homepage />
      </div>
      
    </>
  )
}

export default App
