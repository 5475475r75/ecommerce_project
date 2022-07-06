import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Container/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Container/Contact";


function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header />} >
          <Route exact path='/' element={<Footer />} >
            <Route index element={<Home />} />
            <Route exact path='contact' element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
