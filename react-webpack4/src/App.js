import './App.css';
import Components from "./Components/Components"
import * as Env from "./enviornments.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
  <Components/> 
 );
}

export default App;
