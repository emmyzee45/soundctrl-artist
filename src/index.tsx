import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/JWTContext";

import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
