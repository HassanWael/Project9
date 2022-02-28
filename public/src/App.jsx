import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
    <>

     
      <div className="container">
        <div className="nav">
        <Navbar />
        </div>
        <div className="form">
        <Form/>
        </div>
        <div className="home">
          <Posts/>
       
        </div>
       
        <div>
          
        </div>
      </div>
    </>
  );
}

export default App;
