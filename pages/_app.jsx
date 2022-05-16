import { CartContextProvider } from "../context/cartContext";
import Layout from "../components/Layout/Layout";

import "react-loading-skeleton/dist/skeleton.css";

import "./../styles/scss/main.scss";

const App = ({ Component, pageProps }) => {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
};

export default App;
