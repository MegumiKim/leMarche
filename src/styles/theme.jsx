import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    header: "pink",
    body: "white",
    footer: "pink",
    dark: "#ccc",
    light: "#fff",
    // bg: "var(--color-primary)",
    gradient:
      "linear-gradient(25deg,rgb(34, 193, 195) 0%, rgba(253, 187, 45, 1) 100%)",
  },

  mobile: "500px",
  tablet: "800px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
