import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pcwp2gensj50g46z.us.auth0.com"
      clientId="uxV8Y935ngwpVrzzar92YM5G18MSQoxw"
      authorizationParams={{
        redirect_uri: "https://realestate-yt.vercel.app",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
