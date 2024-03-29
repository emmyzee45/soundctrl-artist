// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import ThemeLocalization from './components/ThemeLocalization';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
        <ThemeLocalization>
            <NotistackProvider>
              <MotionLazyContainer>
                <ProgressBarStyle />
                <ScrollToTop />
                <Router />
              </MotionLazyContainer>
            </NotistackProvider>
        </ThemeLocalization>
    </ThemeProvider>
  );
};

export default App;
