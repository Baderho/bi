import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

// Import components only if they're available
const Home = React.lazy(() => import("./components/Home").catch(() => ({ default: () => <div>Loading Home...</div> })));
const TechnicalDigital = React.lazy(() => import("./components/TechnicalDigital").catch(() => ({ default: () => <div>Loading Technical Digital...</div> })));
const AcademicDigital = React.lazy(() => import("./components/AcademicDigital").catch(() => ({ default: () => <div>Loading Academic Digital...</div> })));
const Achievements = React.lazy(() => import("./components/Achievements").catch(() => ({ default: () => <div>Loading Achievements...</div> })));
const Volunteer = React.lazy(() => import("./components/Volunteer").catch(() => ({ default: () => <div>Loading Volunteer...</div> })));
const AboutUs = React.lazy(() => import("./components/AboutUs").catch(() => ({ default: () => <div>Loading About Us...</div> })));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="app-container font-tajawal" style={{ fontFamily: 'Tajawal, sans-serif', direction: 'rtl', textAlign: 'right' }}>
        {/* Header */}
        <header className="header sticky top-0 z-50 bg-white shadow-md" style={{ backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
              {/* Logo */}
              <div>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3B82F6' }}>رقيم</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div style={{ display: 'block', '@media (min-width: 768px)': { display: 'none' } }}>
                <button
                  onClick={toggleMenu}
                  style={{ color: '#7C3AED', outline: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <svg
                    style={{ height: '1.5rem', width: '1.5rem' }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {menuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <nav style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex', alignItems: 'center', gap: '1.5rem' } }}>
                <Link
                  to="/technical"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none' }}
                >
                  رقيم تقني
                </Link>
                <Link
                  to="/academic"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none' }}
                >
                  رقيم أكاديمي
                </Link>
                <Link
                  to="/achievements"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none' }}
                >
                  الإنجازات
                </Link>
                <Link
                  to="/volunteer"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none' }}
                >
                  تطوع معنا
                </Link>
                <Link
                  to="/about"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none' }}
                >
                  من نحن
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div style={{ display: 'block', '@media (min-width: 768px)': { display: 'none' }, backgroundColor: 'white', paddingBottom: '0.75rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link
                  to="/technical"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: '500', borderRadius: '0.375rem', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  رقيم تقني
                </Link>
                <Link
                  to="/academic"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: '500', borderRadius: '0.375rem', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  رقيم أكاديمي
                </Link>
                <Link
                  to="/achievements"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: '500', borderRadius: '0.375rem', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  الإنجازات
                </Link>
                <Link
                  to="/volunteer"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: '500', borderRadius: '0.375rem', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  تطوع معنا
                </Link>
                <Link
                  to="/about"
                  style={{ color: '#374151', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: '500', borderRadius: '0.375rem', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  من نحن
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Main content */}
        <main style={{ flex: '1' }}>
          <React.Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technical" element={<TechnicalDigital />} />
              <Route path="/academic" element={<AcademicDigital />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '2rem 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' } }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>رقيم</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  منصة تعليمية رقمية مخصصة لدعم المهارات التقنية والأكاديمية باللغة العربية.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>روابط سريعة</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>
                    <Link to="/technical" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                      رقيم تقني
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                      رقيم أكاديمي
                    </Link>
                  </li>
                  <li>
                    <Link to="/achievements" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                      الإنجازات
                    </Link>
                  </li>
                  <li>
                    <Link to="/volunteer" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                      تطوع معنا
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                      من نحن
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>تواصل معنا</h3>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <svg
                    style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>info@raqeem.com</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                    <svg
                      style={{ width: '1.5rem', height: '1.5rem' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(107, 114, 128, 0.7)', paddingTop: '1rem', textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)' }}>
              <p>© {new Date().getFullYear()} رقيم. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
