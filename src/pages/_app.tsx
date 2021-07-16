import { Provider } from "next-auth/client";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    // Our auth provider wraps the parts of our application
    // that should require authentication
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
