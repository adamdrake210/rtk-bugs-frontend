import { Bugs } from "./components/Bugs";
import AppProviders from "./context/AppProviders";

function App() {
  return (
    <AppProviders>
      <Bugs />
    </AppProviders>
  );
}

export default App;
