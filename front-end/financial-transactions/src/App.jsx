import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [fileRead, setFileRead] = useState("")
  
  const uploadFile = async (e) => {
    e.preventDefault();
    
    const leitor = new FileReader()

    leitor.addEventListener("load", () => {
      setFileRead(leitor.result)
    })
    
    if(file){
      leitor.readAsText(file)
    }
  };
  
  return (
    <main>
      <form onSubmit={uploadFile}>
        <label htmlFor="upload">Faça o upload do arquivo</label>
        <input
          type="file"
          accept=".txt"
          id="upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;


