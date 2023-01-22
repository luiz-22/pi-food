import './App.css';
import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getRecipes, getDiets, getDishes } from "./redux/actions";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Title from './components/Title/Title'
import Title2 from './components/Title/Title2'
import NavBar from './components/NavBar/NavBar'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRecipes());
  //   dispatch(getDiets())
  //   dispatch(getDishes())
  // }, [dispatch]);

  return (
    <h1>Hello</h1>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="home" element={
    //       <>
    //         <div className="fix">
    //           <div>
    //             <Title />
    //             <NavBar />
    //             <Home />
    //           </div>
    //           <section>
    //             <Footer />
    //           </section>
    //         </div>
    //       </>
    //     } />
    //     <Route path='detail/:id' element={
    //       <>
    //         <div className="fix">
    //           <div>
    //             <Title2 />
    //             <Detail />
    //           </div>
    //           <section>
    //             <Footer />
    //           </section>
    //         </div>
    //       </>
    //     } />
    //     <Route path='createRecipe' element={
    //       <>
    //         <div className="fix">
    //           <div>
    //             <Title2 />
    //             <Form />
    //           </div>
    //           <section>
    //             <Footer />
    //           </section>
    //         </div>
    //       </>
    //     } />
    //     <Route path='*' element={
    //       <>
    //         <Title2 />
    //         <NotFound />
    //       </>
    //     } />
    //   </Routes>
    // </BrowserRouter >
  );
}

export default App;
