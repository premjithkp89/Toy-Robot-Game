import {RobotApp} from './pages/robot/RobotApp';
import './App.css';
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const theme = createTheme({
  overrides: {
      // MuiTableCell: {
      //     root: {  //This can be referred from Material UI API documentation.
      //         padding: '0px 0px',
      //         backgroundColor: 'gray',

      //     },
      // },

      // MuiTableRow:{
      //   root: {  //This can be referred from Material UI API documentation.
      //     padding: '0px 0px',
      //     backgroundColor: 'gray',

      // },

      // },



  },
});

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <ThemeProvider theme={theme}>
      <Provider store={store}>
      <RobotApp/>
      </Provider>
      </ThemeProvider>
      </header>
    </div>
  );
}

export default App;



