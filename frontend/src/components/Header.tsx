import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import NavigationLink from './shared/NavigationLink';
import { useAuth } from '../context/AuthContext';


const Header = () => {
  const auth  = useAuth();

  return (
   <AppBar sx={{bgcolor:"transparent", position:"static", boxShadow:"none"}}>
    <Toolbar sx={{display:"flex"}}>
    <Logo/>
    <div>
{auth?.isLoggedIn?(
  <>
  <NavigationLink bg='#eb88ff' to='/chat' text='Go to chat' textColor='black'/>
  <NavigationLink bg='#51538f' to='/' text='Logout' textColor='black'/>
  </>
):(
  <>
  <NavigationLink bg='#eb88ff' to='/login' text='Login' textColor='black'/>
  <NavigationLink bg='#51538f' to='/signup' text='Signup' textColor='black'/>
 
  </>
)}
    </div>
    </Toolbar>
   </AppBar>
  )
}

export default Header