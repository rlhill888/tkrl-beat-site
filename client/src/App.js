import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import StudioSession from './StudioSession';
import ExploreBeats from './ExploreBeats';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme= createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#ff009d',
          light: '#606060',
        },
        secondary: {
          main: '#5400b3',
        },
        background: {
          default: '#ffffff',
          paper: '#ece6f3',
        },
      }
})

function App() {
  return (
   <div className='background'>
    <ThemeProvider theme={theme}>
   <Switch>
    
    <Route exact path="/cart">
        <Cart />
    </Route>
    <Route exact path="/contact">
        <Contact />
    </Route>
    <Route exact path="/studiosessions">
        <StudioSession />
    </Route>
    <Route exact path="/ExploreBeats">
        <ExploreBeats />
    </Route>
    <Route  path="/">
            <Home />
        </Route>

   </Switch>
   </ThemeProvider>
   </div>
  );
}

export default App;
