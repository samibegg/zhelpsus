import React from 'react';
import { Tweet } from 'react-tweet';
import Image from 'next/image'; 

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

const galaData = [
  {
    year: '2020',
    image: '/images/Inova-2020.png',
    text: 'Being part of my first MILLION dollars fundraiser was AMAZING! The money I raised went towards: 1. Purchasing Compassion Carts which are filled with healthy snacks because many staff dealing with COVID 19 cannot leave sanitized areas and take PPE off for several hours. Compassion Carts allow essential staff the ability to grab a quick snack during their long long day. 2. Providing mental health apps for free, such as calm and headspace, so Frontline Workers can take some time to decompress and relax after physically and emotionally stressful days.'
  },
  {
    year: '2021',
    image: '/images/Inova-2021.png',
    text: 'Being a part of my second GALA and being a part of 2 MILLION dollars fundraiser was unbelievable! Unfortunately the pandemic is still going, and affecting children everywhere. So this year will be going towards Pediatric Care, to support the smallest but bravest people in the hospital.'
  },
  {
    year: '2022',
    image: '/images/Inova-2022.png',
    text: 'My 3rd gala was awesome'
  }
];

const donorLogos = [
  '800_5f6ab267bc2c1.jpg',
  '800_61607a7e78190.png',
  '800_filter_nobg_6289851884805.png',
  '800_5f6ab29e7b46c.png',
  '800_618f540185f1b.png',
  '800_filter_nobg_628985e812b82.png',
  '800_5f6ab2cbaa54e.jpg',
  '800_618f54866baef.png',
  '800_filter_nobg_628986348ec79.png',
  '800_5f8666446e6af.png',
  '800_618f54e41d91c.png',
  '800_filter_nobg_6289867c0927c.png',
  '800_5f890336d3600.png',
  '800_618f554072827.png',
  '800_filter_nobg_628986b830422.png',
  '800_5f98f20bcbc1c.png',
  '800_6190a2ffceec5.jpg',
  '800_filter_nobg_62898702d7401.png',
  '800_604e36950ef01.png',
  '800_6190a38253602.png',
  '800_filter_nobg_635602b9e4acd.jpg',
  '800_604e36afd55ad.jpg',
  '800_6190a548866ba.png',
  '800_filter_nobg_635603c3898f5.png',
  '800_604e36da6f4cf.png',
  '800_6190a5aee5782.png',
  '800_filter_nobg_635604e2c91e1.png',
  '800_604e36ef8f6a5.png',
  '800_6190a61629021.png',
  '800_filter_nobg_63560507100f0.jpg',
  '800_604e36f90c1d6.jpg',
  '800_6190a665d8b11.png',
  '800_filter_nobg_6356052c4123c.png',
  '800_604e373d4e38c.jpg',
  '800_61e77a9073008.png',
  '800_filter_nobg_6356054c34e29.png',
  '800_604e37908c721.png',
  '800_635603ea3ca3d.jpg',
  '800_filter_nobg_6356058b8e006.png',
  '800_60541fb2bf698.png',
  '800_635604ad4a488.jpg',
  '800_filter_nobg_635605aaada8d.jpg',
  '800_60541febeff9e.jpg',
  '800_63560570afbf3.jpg',
  '800_filter_nobg_635605c4212e9.jpg',
  '800_60542017aa264.png',
  '800_635605e8ee890.jpg',
  '800_filter_nobg_63560606a8b8a.png',
  '800_6054209a3a743.png',
  '800_filter_nobg_628984d02c9ad.png',
  '800_filter_nobg_65274ec83ca87.png'
];

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

const InovaGalasSection = () => {
  return (
    <section id="galas" className="relative py-20 bg-gray-200 sm:py-24">
      <div className="max-w-7xl px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">INOVA Galas</h2>
          <p className="mt-4 text-xl text-gray-700">Supporting frontline workers and pediatric care through fundraising.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {galaData.map((gala) => (
            <div key={gala.year} className="flex flex-col items-center text-center">
              <div className="w-full h-80 relative mb-6">
                <Image
                  src={gala.image}
                  alt={`INOVA Gala ${gala.year}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-3xl font-bold text-cyan-600">{gala.year}</h3>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                {gala.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* This arrow points back to the top of the page */}
      <ScrollArrow href="#home" direction="up" color="text-cyan-600" />
    </section>
  );
};

const DonorsSection = () => {
  return (
    <section id="donors" className="relative py-20 bg-gray-300 sm:py-24">
      <div className="max-w-7xl px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Our Donors</h2>
          <p className="mt-4 text-xl text-gray-700">A heartfelt thank you to all the organizations that have contributed.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {donorLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src={`/images/donorlogos/${logo}`}
                  alt={`Donor logo ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  title={logo.split('.')[0]} // Shows the filename on hover
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* This arrow points back to the top of the page */}
      <ScrollArrow href="#home" direction="up" color="text-cyan-600" />
    </section>
  );
};

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
        <InovaGalasSection />
        <DonorsSection />
      </main>
    </div>
  );
}