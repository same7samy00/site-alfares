import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import AboutApp from './components/AboutApp';
import Features from './components/Features';
import Machine from './components/Machine';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AgentPage from './pages/AgentPage';

// Animated Section Component
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if(domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if(current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};


export const WhatsAppButton: React.FC = () => {
    return (
        <>
            <a
                href="https://wa.me/201013803653"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-110"
                aria-label="Contact us on WhatsApp"
            >
                <img src="https://i.postimg.cc/rFHSfzC9/1.png" alt="WhatsApp" className="h-16 w-auto" />
            </a>
            <div className="whatsapp-bubble">
                تواصل معنا!
            </div>
        </>
    );
};


const App: React.FC = () => {
    const [showAgentPage, setShowAgentPage] = useState(window.location.hash === '#agent-details');

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        const onHashChange = () => {
            if (window.location.hash === '#agent-details') {
                setShowAgentPage(true);
                window.scrollTo(0, 0);
            } else {
                setShowAgentPage(false);
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('hashchange', onHashChange);
        
        // Initial check
        onHashChange();

        return () => {
            window.removeEventListener('hashchange', onHashChange);
        };
    }, []);

    const MainLayout = () => (
        <>
            
            <main>
                <Hero />
                <AnimatedSection><AboutApp /></AnimatedSection>
                <AnimatedSection><Features /></AnimatedSection>
                <AnimatedSection><Machine /></AnimatedSection>
                <AnimatedSection><CTA /></AnimatedSection>
                <AnimatedSection><Testimonials /></AnimatedSection>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );


    return (
        <div className="bg-white text-gray-800">
           {showAgentPage ? <AgentPage /> : <MainLayout />}
        </div>
    );
};

export default App;