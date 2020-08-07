import React, {useEffect} from 'react';
import axios from 'axios';



function App() {

  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
      console.log(err)
    })
  }, []) 
   


  return (
    <div className="App">
      <h1>This is my app</h1>
    </div>
  );
}

export default App;
