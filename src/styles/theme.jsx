import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "pink",
    body: "white",
    footer: "pink",
  },

  mobile: "400px",
  tablet: "800px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;