import { useState } from "react";
import { LandingPage } from "./pages/LandingPage"
import { AnalyzePage } from "./pages/AnalyzePage";


type Page = 'landing' | 'analyze' | 'result';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')

  const handleStart = () => {
    setCurrentPage('analyze');
  };

  return (
    <main>
      {currentPage === 'landing' && (
        <LandingPage onStart={handleStart} />
      )}
      {currentPage === 'analyze' && (
        <AnalyzePage onBack={() => setCurrentPage('landing')} />
      )}
    </main>
  );
}

export default App
