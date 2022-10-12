import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ReactDOM from "react-dom"
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"))


// function App() {
//   return (
//     <div className='overall-container'>
//       <ThemeProvider theme={theme}>
//         <div className='path-container'>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path='/Login' element={<Login/>}/>
//             <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
//             <Route path='/Home' element={<Home/>}/>
//             <Route path='/TVshows' element={<TVshows/>}/>
//             <Route path='/MoviePage' element={<MoviePage/>}/>
//             <Route path='/News' element={<News/>}/>
//             <Route path='/MyList' element={<MyList/>}/>
//             <Route path='/Kids' element={<Kids/>}/>
//             <Route path='/Languages' element={<Languages/>}/>
//             <Route path='/Error' element={<Error/>}/>
//             <Route path='/Notifications' element={<Notifications/>}/>
//             <Route path='/User' element={<User/>}/>
//             <Route path='/PageForm' element={<PageForm/>}/>
//             <Route path='/Remember' element={<Remember/>}/>
//             <Route path='/AllMovies' element={<AllMovies/>}/>
//             <Route path='/Search' element={<Search/>}/>
//           </Routes>
//         </div>
//       </ThemeProvider>
//     </div>
//   );
// }