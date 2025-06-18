// This is the main component for your single-page application.
// We will add more <section> components below this one in the future.

export default function HomePage() {
  return (
    <main>
      {/* SECTION 1: Landing Page / Introduction
        This section is designed to be the first thing visitors see.
      */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          // ===================================================================
          // IMPORTANT: Replace the URL below with the direct URL to your abc.jpg
          // For example: "url('https://example.com/images/abc.jpg')"
          // ===================================================================
          backgroundImage: "url('/images/2000_5f14a851d4f0c.jpg')",
        }}
      >
        {/* This div creates a dark overlay so the white text is readable */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* This div holds the content and centers it */}
        <div className="relative z-10 max-w-4xl p-8 mx-auto text-white">
          <h1 className="text-4xl text-center font-bold tracking-tight text-cyan-300 sm:text-5xl md:text-6xl capitalize">
            chief kindness officer
          </h1>

          <div className="mt-8 space-y-6 text-lg md:text-xl text-gray-200">
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
              Lastly, I love helping people, especially Doctors and Nurses. I think doctors and nurses are amazing superheroes because they save lives. They helped save my life when I had gotten really sick. I had to leave my school and all the sports I love. But these awesome doctors figured out what was wrong with me, took it out of my body and and cared for me at the hospital. Now I am healthy and can do anything I love.
            </p>
            <p>
              When the pandemic started in March 2020, I just knew I had to help the doctors and nurses who had helped me. And so I did! You can read all about how I came up with an idea to collect PPE from hotels. It turned out to be pretty awesome. It is great to be able to help others.
            </p>
            <p>
              I hope this pandemic is finally over but if you know anyone who still needs PPE they can always ask me for some. Just visit the{' '}
              <a href="#need-ppe" className="font-semibold text-cyan-300 hover:text-cyan-200 hover:underline">
                Need PPE
              </a>
              {' '}page and I'll be sure to send some over.
            </p>
          </div>
        </div>
      </section>

      {/* We will add the next sections of your page here later.
        For example: <section id="need-ppe">...</section> 
      */}

    </main>
  );
}