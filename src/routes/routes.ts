import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyLoad/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyLoad/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const lazyLayout = lazy( ()=> import(/* webpackChunkName: "LazyLayout" */ '../lazyLoad/layout/LazyLayout'));


export const routes: Route[] = [
  {
    to:"/lazyLayout/",
    path:"/lazyLayout/*",
    Component: lazyLayout,
    name: "Lazy Layout 1"
  },
  {
    to:"/no-lazyLayout",
    path:"no-lazyLayout",
    Component: NoLazy,
    name: "No Lazy "
  },
  
]
