import { useState } from 'react'
import './App.css'
import Cards from "./components/Cards.jsx"
import screenshot1 from "../assets/img/dj.png"
import screenshot2 from "../assets/img/objects.png"
import screenshot3 from "../assets/img/glosa.png"

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <div className="App">
        <Cards 
          name="Dj website"
          screenshot={screenshot1}
          github="https://github.com/sabbycorrie-cyber/dj"
          technologies="HTML, CSS, JavaScript"
          description="A simple web page for a dj."
          whatItDoes="This project demonstrates the use of html and css."
          whatYouLearned="I learned how to create a simple web page with html and css."
          yourRole="It was a team effort."
          challenges="various css battles."
        />
      </div>
      <br />
      <div className="App">
        <Cards 
          name="objects2"
          screenshot={screenshot2}
          github="https://github.com/mickepollak/objects2"
          technologies="JavaScript"
          description="A simple javascript exercise."
          whatItDoes="This project demonstrates the use of javascript objects."
          whatYouLearned="I learned how to create use objects."
          yourRole="I was the sole developer of this project."
          challenges="not really."
        />
      </div>
      <br />
      <div className="App">
        <Cards 
          name="Glosa"
          screenshot={screenshot3}
          github="https://github.com/mikul-/glosa"
          technologies="Python, shell"
          description="A simple translation program."
          whatItDoes="This project demonstrates the use of Python and shell scripting."
          whatYouLearned="I learned how to create and use Python functions and shell commands."
          yourRole="I was the sole developer of this project."
          challenges="I faced no real challenges. and the program was written with AI assistance, so it was easy to write. I was the one stearing."
        />
      </div>
    </>
  )
}

export default App
