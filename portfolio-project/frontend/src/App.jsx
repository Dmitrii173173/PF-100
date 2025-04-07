import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Projects />
        <ContactForm />
      </div>
    </div>
  );
}

export default App; 