import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';

export const Navegation = () => {

  return <BrowserRouter>

    <div className='main-layout'>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to="/" className={ ({isActive})=> isActive ? 'nav-active': ''  } >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={ ({isActive})=> isActive ? 'nav-active': ''  }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user" className={ ({isActive})=> isActive ? 'nav-active': ''  }>User</NavLink>
          </li>
        </ul>
      </nav>

      
      <Routes >
        <Route path="/" element={ <h1> Home </h1>  } />
        <Route path="/about" element={ <h1> About </h1> } />
        <Route path="/user" element={ <h1> User  </h1>   } />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>

    </div>

  </BrowserRouter>;

};
