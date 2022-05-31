import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyLoad/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const lazy1 = lazy( ()=> import(/* webpackChunkName: "LazyPage1" */ '../lazyLoad/pages/LazyPage1') );
const lazy2 = lazy( ()=> import(/* webpackChunkName: "LazyPage2" */ '../lazyLoad/pages/LazyPage2') );
const lazy3 = lazy( ()=> import(/* webpackChunkName: "LazyPage3" */ '../lazyLoad/pages/LazyPage3') )


export const routes: Route[] = [
  {
    to:"/lazy1",
    path:"/lazy1",
    Component: lazy1,
    name: "Lazy Page 1"
  },
  {
    to:"/lazy2",
    path:"/lazy2",
    Component: lazy2,
    name: "Lazy Page 2"
  },
  {
    to:"/lazy3",
    path:"/lazy3",
    Component: lazy3,
    name: "Lazy Page 3"
  }
]
