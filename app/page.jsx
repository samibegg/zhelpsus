import React from 'react';

// ==========================================================================
// Hero Section Component
// This is the full-screen landing page with the background image.
// ==========================================================================
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/2000_5f14a851d4f0c.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left-aligned content container */}
      <div className="relative z-10 flex flex-col items-start text-left max-w-4xl pl-8 pr-8 sm:pl-16 sm:pr-0">
        <h1 className="text-4xl font-bold tracking-tight text-cyan-300 sm:text-5xl md:text-6xl lg:text-7xl capitalize">
          Z Helps Us
        </h1>
        <p className="mt-6 text-lg text-gray-200 sm:text-xl max-w-2xl">
          sprinkling kindness in the community
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Learn My Story
          </a>
        </div>
      </div>

      {/* Chevron still centered */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <svg
            className="animate-bounce w-8 h-8 text-cyan-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

// ==========================================================================
// About Section Component
// This section contains all the biographical text content.
// ==========================================================================
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-200 sm:py-24">
      <div className="max-w-4xl px-8 mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 md:text-5xl mb-8">
          Chief Kindness Officer
        </h2>

        {/* Body */}
        <div className="space-y-6 text-lg leading-relaxed md:text-xl text-gray-900">
          <p>
            Hi. My name is Zohaib. Some of my friends like to call me Z. I am 10 years old. I am in 5th grade at The Newton School in Virginia!
          </p>
          <p>
            One thing I love is ALL sports. Playing and watching! I play soccer and golf. Me and my family love to go to Capitals, Nationals, and DC United games.
          </p>
          <p>
            I also love to read books. Books at home, at the library, and at Barnes and Nobles. In my other free time, I play chess, code, build legos, ride my bike, scooter, and swim. And if I have more free time I learn new things! This year I learned how to hoverboard and ice skate.
          </p>
          <p>
            Lastly, I love helping people, especially Doctors and Nurses. I think doctors and nurses are amazing superheroes because they save lives. They helped save my life when I had gotten really sick. I had to leave my school and all the sports I love. But these awesome doctors figured out what was wrong with me, took it out of my body and cared for me at the hospital. Now I am healthy and can do anything I love.
          </p>
          <p>
            When the pandemic started in March 2020, I just knew I had to help the doctors and nurses who had helped me. And so I did! You can read all about how I came up with an idea to collect PPE from hotels. It turned out to be pretty awesome. It is great to be able to help others.
          </p>
          <p>
            I hope this pandemic is finally over but if you know anyone who still needs PPE they can always ask me for some. Just visit the{' '}
            <a href="#need-ppe" className="font-semibold text-cyan-300 transition hover:text-cyan-200 hover:underline">
              Need PPE
            </a>{' '}
            page and I'll be sure to send some over.
          </p>
        </div>
      </div>

    </section>
  );
};


const ExecTeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-300 sm:py-24">
      <div className="max-w-4xl px-8 mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 md:text-5xl mb-8">
          Executive Team
        </h2>

        {/* Body */}
        <div className="space-y-6 text-lg leading-relaxed md:text-xl text-gray-900">
          <p>
            This is Executive Team section
          </p>
        </div>
      </div>
    </section>
  );
};


const MyProjectSection = () => {
  return (
    <section id="project" className="py-20 bg-gray-400 sm:py-24">
      <div className="max-w-4xl px-8 mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 md:text-5xl mb-8">
          My Project
        </h2>

        {/* Body */}
        <div className="space-y-6 text-lg leading-relaxed md:text-xl text-gray-900">
          <p>
            Project section
          </p>
        </div>
      </div>
    </section>
  );
};

// ==========================================================================
// Main App Component
// This is the root component that brings all the sections together.
// ==========================================================================
export default function App() {
  return (
    // Add `scroll-smooth` to the root element for smooth anchor link scrolling
    <div className="bg-gray-900 scroll-smooth">
      <main>
        <HeroSection />
        <AboutSection />
        <ExecTeamSection />
        <MyProjectSection />
      </main>
    </div>
  );
}
