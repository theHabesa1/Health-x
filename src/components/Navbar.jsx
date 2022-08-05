import {  AppBar, Avatar, Badge, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { deepOrange } from "@material-ui/core/colors";
import MailIcon from '@material-ui/icons/Mail';

const theme = createTheme({
   
   
  });


const Navbar = () => {
    const theme = createTheme();
  
  return <ThemeProvider theme={theme}><AppBar style={{ 
    backgroundColor: "#212121",
    
  }}>
    <Toolbar className={theme.toolbar}
    sx ={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'transparent',
        boxShadow: 12,

    }}
    >
        <Typography className={theme.appbar}
        style={{}} 
        variant="h6"
        component="h1"
        noWrap
        href="/"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Roboto',
            fontWeight: 2000,
            fontSize: [40, 40, 40],
            letterSpacing: '.2rem',
            textDecoration: 'none',
          }}
         
         >
            Logo
        </Typography>

        { /*<div className={classes.icons}>
        <Badge color="secondary"  variant = "dot" className={classes.badge}>
            <MailIcon />
        </Badge>

        <Avatar sx={{ bgcolor: "#212121"}} variant="square">
            N
        </Avatar>
        </div>*/}
        
        <div className={theme.options}>
            <Typography variant="subtitle2" component={Link} style={{ marginRight: 16 }} 
            sx = {{
                    alignItems: 'center',
                    marginRight: 30,
                    fontFamily: 'Roboto',
                    fontWeight: 100 ,
                    fontSize: [15, 15, 15],
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#212121',
                        color: '#fafafa',
                    },
                    textDecoration: "none",
                    color: '#fafafa',
            
                
            }}
            >
                Home
            </Typography>
            
            <Typography variant="subtitle2" component={Link} style={{ marginRight: 16 }}
            sx = {{
                alignItems: 'center',
                fontFamily: 'Roboto',
                fontWeight: 700,
                marginRight: 2,
                fontWeight: 100 ,
                fontSize: [15, 15, 15],
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#212121',
                    color: '#fafafa',
                },
                textDecoration: "none",
                color: '#fafafa',
        
            
                 }}
            >
                Chat
            </Typography>
            
            <Typography variant="subtitle2" component={Link} style={{ marginRight: 16 }}
            sx = {{
                alignItems: 'center',
                fontFamily: 'Roboto',
                marginRight: 2,
                cursor: 'pointer',
                fontWeight: 100 ,
                fontSize: [15, 15, 15],
                '&:hover': {
                    backgroundColor: '#212121',
                    color: '#fafafa',
                },
                textDecoration: "none",
                color: '#fafafa',
        
            
                }}
            >
                About
            </Typography>
        </div>
        
    </Toolbar>
  </AppBar>
  </ThemeProvider>
};

export default Navbar;