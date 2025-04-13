declare module '@mui/material/styles' {
  interface Theme {
    fontSizes: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;
      septonary: string;
      octonary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    fontSizes?: {
      primary?: string;
      secondary?: string;
      tertiary?: string;
      quaternary?: string;
      quinary?: string;
      senary?: string;
      septonary?: string;
      octonary?: string;
    };
  }
}
