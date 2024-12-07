import { HashRouter as Router } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-base-100" data-theme="tontrac">
          <MainLayout />
        </div>
      </Router>
  );
}

export default App;
