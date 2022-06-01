import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';


export const LazyLayout = () => {
  return <div>
    <h1> lazy layout</h1>
    {/* rutas hijas, navbar,sidebar */}

    <ul>
      <li>
        <NavLink to={"lazypage1"} className={ ({isActive})=> isActive ? 'nav-active': ''  }  > Lazy Layout 1</NavLink>
      </li>
      <li>
        <NavLink to={"lazypage2"} className={ ({isActive})=> isActive ? 'nav-active': ''  }  > Lazy Layout 2</NavLink>
      </li>
      <li>
        <NavLink to={"lazypage3"} className={ ({isActive})=> isActive ? 'nav-active': ''  }  > Lazy Layout 3</NavLink>
      </li>
    </ul>


    
    <Routes>
      <Route path='lazypage1' element={ <LazyPage1/> }  />
      <Route path='lazypage2' element={ <LazyPage2/> }  />
      <Route path='lazypage3' element={ <LazyPage3/> }  />
      <Route path='*' element={ <Navigate replace to="lazypage1" /> }   />
    </Routes>
   
    
  </div>;

};


export default LazyLayout;
