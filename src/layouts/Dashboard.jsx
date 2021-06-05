import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Navi from './Navi.jsx'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
export default function Dashboard() {
    return (
        <div>
       <Navi/>
       <Categories></Categories>
       <ProductList></ProductList>
        </div>

    )
}
