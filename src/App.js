import {Navigate, Route, BrowserRouter as Router, Routes,} from 'react-router-dom'
import './App.css';
import './pages/Pages.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home';
import { HeadContact } from './components/common/HeadContact';
import Navbar from './components/common/Navbar';
import { Doctors } from './pages/Doctors';
import { Footer } from './components/common/Footer';
import { Doctordetails } from './pages/Doctordetails';
import { Blogs } from './pages/Blogs';
import { Blogdetails } from './pages/Blogdetails';
import { Departments } from './pages/Departments';
import { Departmentdoctors } from './pages/Departmentdoctors';
import { Contactus } from './pages/Contactus';
import { Dashboard } from './pages/Dashboard';
import { Appoinment } from './pages/Appoinment';
// import { Loader } from './components/loader/Loader';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import ScrollToTop from './components/common/ScrollToTop';
// import Gallery from './components/Gallery';
import { Gallery2 } from './components/loader/Gallery2';

function App() {

  const ProtectRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))
    return (token && user) !== null && (token && user) !== undefined ? (children) : (<Navigate to={'/login'} />)
  }


  const PublicRoutes = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/register',
      component: <Register />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/doctors',
      component: <Doctors />
    },
    {
      path: '/blogs',
      component: <Blogs />
    },
    {
      path: '/departments',
      component: <Departments />
    },
    {
      path: '/contact',
      component: <Contactus />
    },
    {
      path: '/test',
      component: <Gallery2 />
    },
  ]

  const PrivateRoutes = [

    {
      path: '/doctordetails/:id',
      component: <Doctordetails />
    },
    {
      path: '/departmentdoctors/:id',
      component: <Departmentdoctors />
    },
    {
      path: '/dashboard',
      component: <Dashboard />
    },
    {
      path: '/blogdetails/:id',
      component: <Blogdetails />
    },
    {
      path: '/appointment/:id',
      component: <Appoinment />
    },
  ]

  return (
    <div className="">

      <Router>
        <ScrollToTop />
        <ToastContainer theme='colored'/>
        <HeadContact />
        <Navbar />
        <Routes>
          
          {
            PublicRoutes.map(route => {
              return <Route path={route.path} element={route.component} key={route.path}/>
            })
          }

          {
            PrivateRoutes.map(route => {
              return <Route path={route.path} element={<ProtectRoute>{route.component}</ProtectRoute>} key={route.path} />
            })
          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
