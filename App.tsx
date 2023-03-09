import 'react-native-gesture-handler';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//     dark: true,
//     colors: {
//         ...DarkTheme.colors,
//     },
// };


const App = () => {
    return (
        <AppState>
                <Navigation />
        </AppState>
    );
};

const AppState = ({ children }: any) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default App;
