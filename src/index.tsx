import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/JWTContext";

import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container!);
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
root.render(
  <AuthProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </AuthProvider>
);
