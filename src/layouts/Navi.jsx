import React,{useState} from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Grid, Menu } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useHistory } from 'react-router'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory();
    function handleSignOut(){
     setIsAuthenticated(false);
     history.push("/products")
    }
    function handleSignIn(){
        setIsAuthenticated(true);
        history.push("/")
       }
    return (
        <div>
            <Grid>
            <Menu inverted fixed="top" size='huge'>
                <Container>
                <Menu.Item name='home'/>
                <Menu.Item name='messages'/>

                <Menu.Menu position='right'>
                    <CartSummary></CartSummary>
                    {isAuthenticated?<SignIn signOut={handleSignOut}></SignIn>: <SignOut signIn={handleSignIn}></SignOut>}
                </Menu.Menu>
                </Container>
            </Menu>
            </Grid>

       

        </div>
    )
}
