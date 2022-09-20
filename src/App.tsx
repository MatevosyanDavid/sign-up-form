import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from 'layout';
import theme from 'configs/theme';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
