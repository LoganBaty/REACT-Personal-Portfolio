// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio list page */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Individual project detail page */}
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />

        {/* Temporary home route (you can replace this later) */}
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <h1>Welcome to My Portfolio</h1>
              <p>This is your React homepage. Add content later.</p>
              <a className="btn btn-outline-secondary" href="/portfolio">
                Go to Portfolio
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
