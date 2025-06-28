import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Evenment from "./pages/Evenment"
import Home from "./pages/Home";
import Layout from "./layouts/layout";
import Formation from "./pages/Formation";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduit from "./pages/AddProduit";
import EditProduit from "./pages/EditProduit";
import NosEvenment from "./pages/NosEvenment"
import Blog from "./pages/Blog"
import MarkEvenment from "./pages/MarkEvenment"
import Connect from "./pages/Connect";
import BlogService from "./pages/BlogService"
import AddContact from "./pages/AddContact";
import Contact from "./pages/Contact"




 function App(){
   
  return(
    <>
<BrowserRouter>
<Layout>
  <Routes>
    
    
     <Route path="/" element={<Home />} />
     <Route path="evenment" element={<Evenment/>}/>
             <Route path="formation" element={<Formation/>}/>
         <Route path="about" element={<About/>}/>
             <Route path="register" element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
               <Route path="addContact" element={<AddContact/>}/>
               <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="addProduit" element={<AddProduit/>}/>
                <Route path="/produit/:id" element={<EditProduit/>} />
                  <Route path="nosEvenment" element={<NosEvenment/>}/>
                    <Route path="blog" element={<Blog/>}/>
                    <Route path="markEvenment" element={<MarkEvenment/>}/>
                <Route path="connect" element={<Connect/>}/>
                        <Route path="blogService" element={<BlogService/>}/>
                         <Route path="contact" element={<Contact/>}/>
              
     

            </Routes>
            </Layout>
        </BrowserRouter>
  </>

  );
  
}

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);