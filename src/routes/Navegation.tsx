import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navegation = () => {

  return(
    <Suspense fallback={ <span> Cargando!!! </span> }>

      <BrowserRouter>

        <div className='main-layout'>
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map( ({ to,name }) =>
                  <li key={to}>
                    <NavLink  to={to} className={ ({isActive})=> isActive ? 'nav-active': ''  }  > { name } </NavLink>

                  </li>
                )
              }
            </ul>
          </nav>

          
          <Routes >
            {
              routes.map( ({ path, Component }) => <Route key={path} path={path} element={ <Component /> } />)
            }
            <Route path="/*" element={<Navigate replace to={ routes[0].to } />} />
          </Routes>

        </div>

      </BrowserRouter>

    </Suspense>


  ) 
  

};
