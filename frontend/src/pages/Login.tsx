import { Box, Button, Typography } from '@mui/material'
import { AiOutlineLogin } from "react-icons/ai";
import  {toast} from 'react-hot-toast';

import CustomizedInput from '../components/shared/CustomizedInput'
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const auth = useAuth();
  const  handleSubmit =async (e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     const formData = new FormData(e.currentTarget);
     const email = formData.get('email') as string;
     const password = formData.get('password') as string;
     try {
      toast.loading("Signing In...",{id:"login"});
      await auth?.login(email, password); 
      toast.success("Sign In successful",{id:"login"});
     } catch (error) {
      toast.error("Sign In failed",{id:"login"});
      console.log(error);
     }
  }
  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{md:"flex", sm:"none", xs:"none"}}>
        <img src="airobot.png" alt="" style={{width:"400px"}} />
      </Box>
      <Box display={"flex"} flex={{xs:1, md:0.5}} justifyContent={'center'} alignItems={"center"} m={"auto"} mt={{xs:10, md:"auto"}} >
      <form
      onSubmit={(handleSubmit )} action="" style={{margin:"auto", padding:"30px", boxShadow:"5px 5px 10px #000",borderRadius:"10px", border:"none"}}>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          jutifyContent:"center",
          gap:3
        }} >
          <Typography variant='h4' textAlign="center" padding={2} fontWeight={600}>
          Login
          </Typography>
          
            <CustomizedInput type='email' name="email"label='Email' />
            <CustomizedInput type='password' name="password"label='Password' />
            <Button type='submit' 
            sx={{px:2, py:1, mt:2, width:"400px",color:"black", borderRadius:2, bgcolor:"#eb88ff",
          ":hover":{
            bgcolor:"white",
            color:"black"
          }}}
          endIcon={<AiOutlineLogin/>}>Login</Button>
        </Box>
      </form>
      </Box>
    </Box>
  )
}

export default Login