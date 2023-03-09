import { Theme } from '@react-navigation/native';

type ThemeActions =
    | { type: 'set_dark_theme' }
    | { type: 'set_light_theme' };

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.3)',
    dark: false,
    colors: {
        primary: '#5856D6',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'rgb(255, 69, 58)',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(255,255,255,0.7)',
    dark: true,
    colors: {
        primary: '#5856D6',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'rgb(255, 69, 58)',
    },
};



export const ThemeReducer = (state: ThemeState, action: ThemeActions) : ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme};
        case 'set_dark_theme':
            return {...darkTheme};
        default:
            return state;
    }
};
