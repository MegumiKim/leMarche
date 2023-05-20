import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    dark: "#ccc",
    light: "#fff",
    gradient: "var(--gradient)",
  },

  mobile: "500px",
  tablet: "900px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
