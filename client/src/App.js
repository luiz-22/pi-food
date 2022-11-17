import './App.css';
import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getRecipes, getDiets, getDishes } from "./redux/actions";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets())
    dispatch(getDishes())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={
          <>
            <div className="fix">
              <div>
                <Title />
                <NavBar />
                <Home />
              </div>
              <section>
                <Footer />
              </section>
            </div>
          </>
        } />
        <Route path='detail/:id' element={
          <>
            <Title />
            <Detail />
          </>
        } />
        <Route path='createRecipe' element={
          <>
            <Title />
            <Form />
          </>
        } />
        <Route path='*' element={
          <>
            <Title />
            <h2>Page not found.</h2>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
