import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { queryClient } from "./lib/reactQuery";
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";
import { QueryClientProvider } from "@tanstack/react-query";
function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* <AppInitializer /> */}
          {/* <Toaster position="top-right" richColors={true} closeButton={true} /> */}
          {/* <ScrollToTop /> */}
          <AppRoutes />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
