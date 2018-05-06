/**
 * Created by pengyunlong on 2018/5/6.
 */
import Home from 'views/Home'
import Foo from 'views/Foo'
import Bar from 'views/Bar'
import Weex from 'views/Weex'



export default [
    {path:'/home', name: 'home',component: Home},
    { path: '/foo',name: 'foo', component: Foo },
    { path: '/bar',name: 'bar', component: Bar },
    { path: '/weex',name: 'weex', component: Weex },
]
