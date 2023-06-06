import { Route, Routes } from "react-router-dom";

import ContentDisplay from "./components/ContentDisplay";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {

 return (
   <div id="app-wrapper">
     <Search />
     <Nav />
     <Routes>
       <Route index element={<ContentDisplay/>} />
       <Route path="search/:term" element={<ContentDisplay/>} />
       <Route path="*" element={<h1>404: Page Not Found!</h1>} />
     </Routes>
   </div>
 );
}



export default App;
