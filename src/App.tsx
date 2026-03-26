import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ConsultationPage } from "@/pages/ConsultationPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-1 pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
