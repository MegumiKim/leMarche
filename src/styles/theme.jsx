import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#fc6b98",
    dark: "#ccc",
    light: "#fff",
    gradient: "linear-gradient(25deg,#fc6b98 0%, rgba(253, 187, 45, 1) 100%)",
  },

  mobile: "500px",
  tablet: "800px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
