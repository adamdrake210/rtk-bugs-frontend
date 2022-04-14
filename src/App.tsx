import AppLayout from "layout/AppLayout";
import { Bugs } from "./components/Bugs";
import AppProviders from "./context/AppProviders";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <Bugs />
      </AppLayout>
    </AppProviders>
  );
}

export default App;
