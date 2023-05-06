import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "pink",
    body: "white",
    footer: "pink",
    bg: "rgb(34, 193, 195)",
    gradient:
      "linear-gradient(25deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
  },

  mobile: "400px",
  tablet: "800px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
