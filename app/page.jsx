import React from 'react';
import { Tweet } from 'react-tweet';

const pressArticles = [
    { title: '2022 Points of Light Inspiration Honor Roll', date: '5/20/2022', source: 'Points of Light', url: 'https://www.pointsoflight.org/inspiration-honor-roll/2022-2/?honoree-anchor=zohaib-begg' },
    { title: 'Big Heart World', date: '11/4/2021', source: 'Big Heart World', url: 'https://www.bigheartworld.org/three-little-kids-helping-in-big-ways/' },
    { title: 'New Disney x Bombas collection highlights kids going above and beyond', date: '10/18/2021', source: 'Good Morning America', url: 'https://www.goodmorningamerica.com/style/story/disney-bombas-collection-highlights-kids-communities-80643436' },
    { title: '97.1 Radio interview', date: '4/26/2021', source: 'iHeart Radio', url: 'https://washfm.iheart.com/featured/toby-and-chilli-mornings/content/2021-04-26-mym-we-talk-to-an-8-year-old-va-boy-who-is-helping-the-homeless/' },
    { title: 'Patch coverage of assembling kits', date: '4/18/2021', source: 'Patch.com', url: 'https://patch.com/virginia/ashburn/ashburn-boy-distribute-toiletry-kits-needy-across-dc-area' },
    { title: 'WJLA - DC Homeless Help', date: '4/14/2021', source: 'ABC News', url: 'https://wjla.com/news/local/8-year-old-virginia-boy-donates-frontline-workers' },
    { title: 'COVID 1-year Update', date: '3/8/2021', source: 'Patch.com', url: 'https://patch.com/virginia/arlington-va/loss-coping-helpers-covid-19-virginia-year-later' },
    { title: 'INOVA Update', date: '11/2/2020', source: 'Patch.com', url: 'https://patch.com/virginia/ashburn/ashburn-boy-gathers-auction-items-honor-health-care-workers' },
    { title: 'INOVA Hospital', date: '4/8/2020', source: 'INOVA Newsroom', url: 'https://www.inovanewsroom.org/featured-stories/2020/04/a-boy-from-ashburn-transforms-hotel-shower-caps-into-hospital-supplies/' },
    { title: 'TeamOYG', date: '4/1/2020', source: 'TeamOYG.com', url: 'https://teamoyg.com/heros/zohaib-begg' },
    { title: 'Tanksgoodnews', date: '3/31/2020', source: 'tanksgoodnews.com', url: 'https://tanksgoodnews.com/2020/03/30/zohaib-begg/' },
    { title: 'WTOP coverage', date: '3/27/2020', source: 'WTOP News', url: 'https://wtop.com/loudoun-county/2020/03/hotel-shower-caps-become-er-supplies-thanks-to-boy-in-ashburn/' },
    { title: 'WUSA Channel 9', date: '3/31/2020', source: 'CBS News', url: 'https://wtop.com/loudoun-county/2020/03/hotel-shower-caps-become-er-supplies-thanks-to-boy-in-ashburn/' },
    { title: 'Ashburn Magazine', date: '6/4/2020', source: 'Ashburn Magazine', url: 'https://www.ashburnmagazine.com/features/ashburn-residents-help-protect-medical-professionals-on-the-front-lines/' },
    { title: 'WJLA Coverage', date: '4/1/2020', source: 'ABC News', url: 'https://wjla.com/news/local/second-grade-virginia-boy-collects-thousands-masks-gloves-hospitals' },
    { title: 'First Press Release', date: '3/27/2020', source: 'Patch.com', url: 'https://patch.com/virginia/ashburn/second-grade-boy-collects-6-000-masks-caps-hospital-workers' },
    { title: 'CafeMom Blog', date: '4/21/2020', source: 'CafeMom', url: 'https://cafemom.com/parenting/224858-kids-stepping-up' },
    { title: 'Upworthy Blog', date: '5/13/2021', source: 'Upworthy', url: 'https://scoop.upworthy.com/8-year-old-boy-is-on-a-mission-to-help-1-000-homeless-people-in-washington-d-c' }
];

const tweetIds = [
    "1244671710198104064", "1245848248520183808", "1244969605061382144",
    "1245478734066565120", "1245037158592806914", "1247190792839495680",
    "1247602799455752194"
];

// ==========================================================================
// Reusable Scroll Arrow Component
// We create this once and can reuse it in every section.
// ==========================================================================
const ScrollArrow = ({ href, direction = 'down', color = 'text-cyan-300' }) => {
  const path = direction === 'down' ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7';
  const label = direction === 'down' ? 'Scroll down' : 'Scroll to top';

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
      <a href={href} aria-label={label}>
        <svg
          className={`animate-bounce w-8 h-8 ${color}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d={path}></path>
        </svg>
      </a>
    </div>
  );
};


// ==========================================================================
// Hero Section Component
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
      <div className="absolute inset-0 bg-black/20"></div>
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
      <ScrollArrow href="#about" />
    </section>
  );
};

// ==========================================================================
// About Section Component
// ==========================================================================
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-200 sm:py-24">
      <div className="max-w-4xl px-8 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 md:text-5xl mb-8">
          Chief Kindness Officer
        </h2>
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
      <ScrollArrow href="#team" color="text-cyan-600" />
    </section>
  );
};

// ==========================================================================
// Executive Team Section Component
// ==========================================================================
const ExecTeamSection = () => {
  return (
    <section id="team" className="relative py-20 bg-gray-300 sm:py-24">
      <div className="max-w-4xl px-8 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 md:text-5xl mb-8">
          Executive Team
        </h2>
        <div className="space-y-6 text-lg leading-relaxed md:text-xl text-gray-900">
          <p>
            This is Executive Team section
          </p>
        </div>
      </div>
      <ScrollArrow href="#project" color="text-cyan-600" />
    </section>
  );
};


// ==========================================================================
// My Project Section
// ==========================================================================
const timelineEvents = [
  { date: '3/12/2020', title: 'I Kept Hearing About The Problem', description: "There's many doctors in my family and I kept hearing about the shortage of personal protective equipment from them and also on the news." },
  { date: '3/16/2020', title: 'Finding A Solution', description: 'I wanted to make masks, and started watching YouTube videos on how to make them, but realized I did not know how to sew nor did I have the necessary equipment. Then I started thinking about what else I could do.' },
  { date: '3/19/2020', title: 'An Idea Came To Me', description: "I overheard my Aunt, an ER doctor, asking if she could borrow my mom's swim caps because there was a shortage of headgear. That made me think maybe she could use a shower cap instead, so I asked her if shower caps could be used as PPE, and she said yes. I knew exactly who would have a bunch of shower caps!" },
  { date: '3/23/2020', title: 'Taking Action', description: 'Because I travel so much with my family, I remembered that hotel rooms always have shower caps. I made a list of all the hotels in my town, and I asked my mom if she would help me call them for shower caps donations. Not only did I collect a bunch of shower caps, I was able to collect masks and gloves too!' },
  { date: '3/26/2020', title: 'Going For A Goal', description: 'I was so excited to tell my aunt and the hospital that I had collected 3000 units of PPE, but I wanted to collect even more. That same night I saw in the news that the Washington National Cathedral donated 5000 masks to nearby hospitals, and I just knew I could beat that number. I convinced my mom to please please let me keep going even though the shutdown had started.', link: { url: 'https://cathedral.org/press-room/cathedral-to-donate-5000-masks-to-hospitals-to-combat-coronavirus/', text: 'Read the article' } },
  { date: '3/28/2020', title: 'DID IT!!!', description: 'I kept calling and going to other hotels who had supplies for me, and when I counted again, I had reached 6009 units of PPE! We immediately called the hospital to let them know about the supplies we had collected for them, and they quickly sent a courier to my house to collect everything.', link: { url: 'https://abcnews.go.com/US/year-donates-6000-masks-gloves-caps-hotels-hospital/story?id=69948357', text: 'See the news story' } },
  { date: '3/30/2020', title: 'President Obama Said I Did A Good Job', description: 'My local community was inspired by what I did, but I could not believe that President Obama heard about what I did and thought I did a good job and then tweeted about my work.' },
  { date: '7/1/2020', title: 'Continuing', description: 'I continue to collect PPE from hotels and provide it to those in need. If you need PPE, please click here for a PPE kit.' },
];

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-4 group">
      <div className="absolute left-0 w-4 h-4 mt-2 bg-white border-4 border-cyan-500 rounded-full z-10"></div>
      <div className="absolute left-2 top-0 h-full w-0.5 bg-cyan-300"></div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden">
        <time className="sm:absolute left-0 translate-y-1 text-lg font-semibold uppercase text-cyan-600">{date}</time>
        <div className="mt-4 sm:mt-0 sm:ml-8">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-lg leading-relaxed text-gray-700">
            {description}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-2 font-semibold text-cyan-600 transition hover:text-cyan-500 hover:underline"
              >
                ({link.text})
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const PressSection = () => {
    return (
        <section id="press" className="relative py-20 bg-gray-300 sm:py-24">
            <div className="max-w-7xl px-8 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">In The News</h2>
                    <p className="mt-4 text-xl text-gray-700">A collection of articles and news stories about the project.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pressArticles.map((article, index) => (
                        <div key={index} className="flex flex-col bg-white/80 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-cyan-600 uppercase">{article.source}</p>
                                <h3 className="mt-2 text-xl font-bold text-gray-800 flex-grow">{article.title}</h3>
                                <p className="mt-2 text-gray-600">{article.date}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block px-6 py-2 text-center font-semibold text-white transition bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-500"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow href="#tweets" color="text-cyan-600" />
        </section>
    );
};


// ==========================================================================
// NEW Tweets Section Component
// ==========================================================================
const TweetsSection = () => {
    return (
        <section id="tweets" className="relative py-20 bg-gray-800 sm:py-24">
            <div className="max-w-7xl px-8 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">What People Are Saying</h2>
                    <p className="mt-4 text-xl text-gray-400">Mentions from leaders and news organizations on X.</p>
                </div>
                {/* This container makes the embedded tweets look great */}
                <div className="tweets-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-theme="dark">
                     {tweetIds.map((id) => (
                        <div key={id} className="flex justify-center">
                            <Tweet id={id} />
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow href="#project" color="text-white" />
        </section>
    );
};

const MyProjectSection = () => {
  return (
    <section id="project" className="relative py-20 bg-gray-400 sm:py-24">
      <div className="max-w-4xl px-4 sm:px-8 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">My PPE Project</h2>
          <p className="mt-4 text-xl text-gray-800">A timeline of how I helped my community.</p>
        </div>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} {...event} />
          ))}
        </div>
      </div>
      <ScrollArrow href="#home" direction="up" color="text-white" />
    </section>
  );
};


// ==========================================================================
// Main App Component
// ==========================================================================
export default function App() {
  return (
    <div className="bg-gray-900 scroll-smooth">
      <main>
        <HeroSection />
        <AboutSection />
        <ExecTeamSection />
        <MyProjectSection />
        <PressSection />
        <TweetsSection />
      </main>
    </div>
  );
}