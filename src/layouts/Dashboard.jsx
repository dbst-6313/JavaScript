import React from 'react'
import { Button, GridColumn, GridRow, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Navi from './Navi.jsx'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetailList from '../pages/ProductDetail.jsx'
export default function Dashboard() {
    return (
        <div>
            <Grid >
                <GridRow>
                    <GridColumn   width={4}>
                    <Categories></Categories> 
                    </GridColumn>
                    <GridColumn  width={12}>
                    <Route exact path="/products" component={ProductList}></Route>
                    <Route path="/products/:name" component={ProductDetailList}></Route>
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div>

    )
}
