"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import HeroBanner from '../components/AboutHeroBanner';
import AboutHeroBanner from '../components/AboutHeroBanner';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/BreadCrumb';
import { ArrowRightIcon, ArrowUpRight, ChevronLeft, ChevronRight, Hexagon } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';
import RotatingTab from '../components/RotatingTab';
import SpotlightText from '../components/SpotlightTeaxt';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState("Teams");
  const [teamIndex, setTeamIndex] = useState(0);
  const [cultureIndex, setCultureIndex] = useState(0);
  const [achievementIndex, setAchievementIndex] = useState(0);

  // Auto slide fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handler functions for tab navigation
  const handleTeamChange = (direction: string) => {
    if (direction === 'next') {
      setTeamIndex((prev) => (prev + 1) % teamsData.length);
    } else {
      setTeamIndex((prev) => (prev - 1 + teamsData.length) % teamsData.length);
    }
  };

  const handleCultureChange = (direction: string) => {
    if (direction === 'next') {
      setCultureIndex((prev) => (prev + 1) % cultureData.length);
    } else {
      setCultureIndex((prev) => (prev - 1 + cultureData.length) % cultureData.length);
    }
  };

  const handleAchievementChange = (direction: string) => {
    if (direction === 'next') {
      setAchievementIndex((prev) => (prev + 1) % achievementsData.length);
    } else {
      setAchievementIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
    }
  };

  // Teams Data
  const teamsData = [
    {
      name: "James Bond",
      role: "UI/UX Designer",
      title: "Lorem ipsum dolor sit ametsses",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: "/our-vision.png"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      title: "Building Scalable Solutions",
      desc: "With over 8 years of experience in full-stack development, Sarah leads our technical initiatives and ensures code quality across all projects.",
      image: "/our-vision.png"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      title: "Driving Product Innovation",
      desc: "Michael brings strategic vision and technical expertise to guide our product development from concept to launch.",
      image: "/our-vision.png"
    }
  ];

  // Culture Data
  const cultureData = [
    {
      name: "Work-Life Balance",
      role: "Flexible & Remote-Friendly",
      title: "A Culture of Innovation & Collaboration",
      desc: "We foster an environment where creativity thrives and ideas flow freely. Our culture is built on mutual respect and continuous learning.",
      image: "/wrk-life.jpg"
    },
    {
      name: "Continuous Learning",
      role: "Weekly Workshops",
      title: "Growth Mindset",
      desc: "We invest in our team's growth through regular learning sessions, conferences, and skill-building workshops.",
      image: "/wrk-life.jpg"
    },
    {
      name: "Inclusive Environment",
      role: "Diverse & Supportive",
      title: "Where Everyone Belongs",
      desc: "We celebrate diversity and create an inclusive workplace where every voice is heard and valued.",
      image: "/wrk-life.jpg"
    }
  ];

  // Achievements Data
  const achievementsData = [
    {
      name: "50+ Awards",
      role: "Industry Recognition",
      title: "Recognized Excellence in Digital Innovation",
      desc: "Our work has been recognized by leading industry organizations worldwide for innovation and technical excellence.",
      image: "/achievements.jpg"
    },
    {
      name: "200+ Projects",
      role: "Global Clients",
      title: "Proven Track Record",
      desc: "Successfully delivered projects for clients across various industries, from startups to Fortune 500 companies.",
      image: "/achievements.jpg"
    },
    {
      name: "98% Retention",
      role: "Client Satisfaction",
      title: "Building Lasting Partnerships",
      desc: "Our focus on quality and relationships has resulted in long-term partnerships with our clients.",
      image: "/achievements.jpg"
    }
  ];

  const services = [
    {
      title: "Design Led Solutions",
      desc: "We create clean, intuitive, and modern UI/UX experiences that keep users engaged and aligned with business goals.",
      icon: "/about-card1.png",
    },
    {
      title: "Seamless System Integration",
      desc: "Our solutions integrate smoothly with your existing tools, platforms, and workflows without disruption.",
      icon: "/about-card2.png",
    },
    {
      title: "Enterprise Grade Security",
      desc: "We follow best security practices to protect your data, applications, and infrastructure at every level.",
      icon: "/about-card3.png",
    },
    {
      title: "Scalable Architecture",
      desc: "Built to grow with your business from early stage to enterprise scale without performance loss.",
      icon: "/about-card4.png",
    },
    {
      title: "Reliable Support & Maintenance",
      desc: "Continuous monitoring, updates, and support to keep your systems stable, secure, and future-ready.",
      icon: "/about-card5.png",
    },
  ];

  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
    },
    {
      value: "94%",
      label: "Client Satisfaction",
    },
    {
      value: "5+",
      label: "Years of Experience",
    },
    {
      value: "100+",
      label: "Team Members",
    },
  ];

  const data = [
    {
      title: "Quality First",
      desc: "We focus on delivering high quality solutions that are reliable, efficient, and built to last.",
      position: "mt-0",
    },
    {
      title: "Client Approach",
      desc: "Every decision we make is guided by our clients' goals, challenges, and long-term success.",
      position: "mt-24",
    },
    {
      title: "Transparency & Trust",
      desc: "Clear communication, honest timelines, and full visibility throughout every project.",
      position: "mt-0",
    },
    {
      title: "Growth",
      desc: "We constantly learn, adapt, and evolve with new technologies and best practices.",
      position: "mt-24",
    },
    {
      title: "Collaboration",
      desc: "We work as partners, taking responsibility for outcomes and shared success.",
      position: "mt-0",
    },
  ];

  const features = [
    {
      title: "Modern Technology",
      desc: "We work with the latest tools and frameworks to build secure, scalable, and future-ready systems.",
      icon: "/w1.png",
    },
    {
      title: "Expert Team",
      desc: "Our skilled designers and developers bring strong industry knowledge and hands-on experience.",
      icon: "/w2.png",
    },
    {
      title: "Tailored Solutions",
      desc: "Every project is crafted based on your unique business needs.",
      icon: "/w3.png",
    },
    {
      title: "Proven Results",
      desc: "We focus on performance, usability, and long-term value.",
      icon: "/w4.png",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Breadcrumb/>
      <AboutHeroBanner/>
      <section className='w-fit mx-auto'>
        <div className="relative z-10 flex flex-col -mt-19 items-center justify-center text-center gap-6 py-24 w-fit mx-auto">
          <RotatingTab
            title="Experiences"
            className="rounded-md mb-6 text-center flex items-center justify-center w-[130px] h-[40px] text-sm"
          />

          {/* Spotlight Section */}
          <div
            onMouseMove={handleMouseMove}
            className="relative flex justify-center items-center overflow-hidden py-2 w-fit mx-auto"
          >
            {/* Base Text */}
            <h1
              className={`${spaceGrotesk.className} absolute text-[60px] leading-tight font-extrabold text-gray-600 pointer-events-none whitespace-nowrap`}
            >
              Technology That Powers Every Brand
            </h1>

            {/* Spotlight Text */}
            <h1
              className={`${spaceGrotesk.className} text-[60px] leading-tight font-extrabold text-white relative whitespace-nowrap`}
              style={{
                WebkitMaskImage: `linear-gradient(
                  to right,
                  transparent 0%,
                  black ${position.x - 150}px,
                  black ${position.x + 150}px,
                  transparent 100%
                )`,
                maskImage: `linear-gradient(
                  to right,
                  transparent 0%,
                  black ${position.x - 150}px,
                  black ${position.x + 150}px,
                  transparent 100%
                )`,
              }}
            >
              Technology That Powers Every Brand
            </h1>
          </div>

          <div className="w-full flex justify-center py-6">
            <div className="relative w-[140px] h-[2.5px]">
              {/* Soft Glow */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-r 
                from-transparent 
                via-[#6EA8FF] 
                to-transparent 
                blur-md opacity-70" />
              {/* Sharp Center Line */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-r 
                from-transparent 
                via-[#9B8CFF] 
                to-transparent" />
            </div>
          </div>

          <p className="text-[22px] text-[#B9B9B9]">
            We design, develop, and maintain high-quality digital solutions tailored
            <br />
            to your business needs
          </p>

          <div className="w-full flex justify-center py-6">
            <div className="flex items-center gap-8 text-sm text-gray-300">
              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Fast & Secure Development</span>
              </div>
              {/* Divider */}
              <div className="h-4 w-px bg-gray-600 opacity-60"></div>
              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                <span>Scalable Support & Maintenance</span>
              </div>
              {/* Divider */}
              <div className="h-4 w-px bg-gray-600 opacity-60"></div>
              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>

          <section className="w-full bg-black py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-[60px] sm:text-5xl font-medium text-teal-400">
                      {stat.value}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="flex justify-end w-fit ml-[1140px]">
            <RotatingTab
              title="How we help"
              className="rounded-md mb-3 pt-2 w-[140px] h-[40px] text-sm text-center"
            />
          </div>
          
          <SpotlightText
            text="Where Innovations Meets Reliability"
            className={`${spaceGrotesk.className} text-[42px] leading-tight font-extrabold ml-[530px]`}
          />
          
          <section className="bg-black py-24 px-6 w-fit mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-6 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`
                      rounded-2xl
                      bg-[#1E1E1E]
                      border border-white/10
                      p-6
                      h-[360px]
                      flex flex-col
                      ${index < 3 ? "md:col-span-2" : "md:col-span-3"}
                    `}
                  >
                    {/* ICON AREA */}
                    <div className="h-40 flex items-center justify-center">
                      <div className="relative w-[360px] h-[160px]">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* TEXT AREA */}
                    <div className="mt-6">
                      <h3 className="text-white text-[24px] font-medium leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-[18px] leading-relaxed mt-3">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-fit bg-[#050505] py-4">
            <div className="max-w-full mx-auto px-32">
              {/* Heading */}
              <div className="flex flex-col items-start mb-20">
                <RotatingTab
                  title="Our Values"
                  className="rounded-md mb-4 pt-2 w-[140px] h-[40px] text-sm"
                />
                <SpotlightText
                  text="Built on clarity, quality, and trust."
                  className={`${spaceGrotesk.className} text-[42px] leading-tight font-extrabold text-left`}
                />
              </div>

              {/* Cards */}
              <div className="flex -ml-1 items-start gap-11 flex-wrap">
                {data.map((item, i) => (
                  <div
                    key={i}
                    className={`relative w-[218px] rounded-[22px] card-radial-border border-white/20 
                      bg-black p-7 overflow-hidden
                      shadow-[0_0_50px_rgba(0,0,0,0.6)]
                      ${item.position}`}
                  >
                    <div className="relative z-10">
                      <Image
                        src="/values.png"
                        alt="value icon"
                        width={48}
                        height={40}
                        className="mb-6 opacity-80"
                      />
                      <h3 className="text-white text-[20px] font-medium mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-[16px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-fit bg-black py-3">
            {/* Heading (Right Side) */}
            <div className="flex flex-col items-end mr-0 ml-auto mb-20 max-w-fit">
              <RotatingTab
                title="Why Choose us"
                className="rounded-md mb-4 pt-2 w-[140px] h-[40px] text-sm"
              />
              <SpotlightText
                text="Built on clarity, quality, and trust."
                className={`${spaceGrotesk.className} text-[42px] leading-tight font-extrabold text-left`}
              />
            </div>

            {/* Features Grid */}
            <div className="flex justify-center">
              <div className="max-w-7xl w-full grid md:grid-cols-4 gap-12">
                {features.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-[132px] h-[132px]">
                        {/* Base logo */}
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                        {/* Masked glow overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            WebkitMaskImage: `url(${item.icon})`,
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            WebkitMaskPosition: "center",
                            maskImage: `url(${item.icon})`,
                            maskRepeat: "no-repeat",
                            maskSize: "contain",
                            maskPosition: "center",
                          }}
                        >
                          <div className="outline-sweep"></div>
                          <div className="outline-sweep-secondary"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-fit bg-black py-20 px-10">
            {/* Heading */}
            <div className="flex flex-col items-start mb-20">
              <RotatingTab
                title="Your Vision, Our Mission to Achieve"
                className="rounded-md mb-4 pt-2 w-[250px] h-[40px] text-sm"
              />
              <SpotlightText
                text="Trusted Expertise for Real World Growth"
                className={`${spaceGrotesk.className} text-[42px] leading-tight font-extrabold text-left`}
              />
            </div>

            <div className="max-w-7xl mx-auto flex gap-16 items-center">
              {/* Left Vertical Tabs */}
              <div className="flex flex-col gap-6 text-gray-500 text-sm">
                {["Teams", "Culture", "Achievements"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`text-left transition-all duration-300 ${
                      activeTab === item
                        ? "text-white font-semibold relative after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] "
                        : "hover:text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Dynamic Content based on active tab */}
              {activeTab === "Teams" && (
                <>
                  {/* Image Card */}
                  <div className="relative w-[500px] h-[350px] rounded-3xl overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                    <Image
                      src={teamsData[teamIndex].image}
                      alt="team"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 text-white">
                    <h2 className="text-3xl font-semibold mb-6 leading-snug">
                      {teamsData[teamIndex].title}
                    </h2>
                    <p className="text-gray-400 mb-12 leading-relaxed max-w-lg">
                      {teamsData[teamIndex].desc}
                    </p>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{teamsData[teamIndex].name}</h4>
                        <p className="text-gray-500 text-sm">{teamsData[teamIndex].role}</p>
                      </div>

                      {/* Arrows */}
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleTeamChange('prev')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button 
                          onClick={() => handleTeamChange('next')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Culture" && (
                <>
                  {/* Image Card */}
                  <div className="relative w-[500px] h-[350px] rounded-3xl overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                    <Image
                      src={cultureData[cultureIndex].image}
                      alt="culture"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 text-white">
                    <h2 className="text-3xl font-semibold mb-6 leading-snug">
                      {cultureData[cultureIndex].title}
                    </h2>
                    <p className="text-gray-400 mb-12 leading-relaxed max-w-lg">
                      {cultureData[cultureIndex].desc}
                    </p>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{cultureData[cultureIndex].name}</h4>
                        <p className="text-gray-500 text-sm">{cultureData[cultureIndex].role}</p>
                      </div>

                      {/* Arrows */}
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleCultureChange('prev')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button 
                          onClick={() => handleCultureChange('next')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Achievements" && (
                <>
                  {/* Image Card */}
                  <div className="relative w-[500px] h-[350px] rounded-3xl overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                    <Image
                      src={achievementsData[achievementIndex].image}
                      alt="achievements"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 text-white">
                    <h2 className="text-3xl font-semibold mb-6 leading-snug">
                      {achievementsData[achievementIndex].title}
                    </h2>
                    <p className="text-gray-400 mb-12 leading-relaxed max-w-lg">
                      {achievementsData[achievementIndex].desc}
                    </p>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{achievementsData[achievementIndex].name}</h4>
                        <p className="text-gray-500 text-sm">{achievementsData[achievementIndex].role}</p>
                      </div>

                      {/* Arrows */}
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleAchievementChange('prev')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button 
                          onClick={() => handleAchievementChange('next')}
                          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

<section className="relative w-full  flex flex-col items-center text-center overflow-hidden bg-black">

  {/* Background Layer */}
  <div className="absolute inset-0 z-0">

    <div
      className="absolute inset-0 bg-center bg-cover "
      style={{
        backgroundImage: "url('/ctabg.png')",
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center">

    <h2 className={`${spaceGrotesk.className} text-[42px] leading-tight font-extrabold text-white max-w-4xl`}>
      Take your business digital the smart way.
    </h2>

    <p className="text-gray-400 text-[20px] mt-6 max-w-3xl">
      We design and build modern websites, applications, and digital systems
      that help your business grow faster and operate smarter.
    </p>

    <button className="group relative flex mt-14 items-center justify-between 
      w-[250px] h-[56px] px-4 rounded-full 
      bg-gradient-to-r from-[#2ED3B7] to-[#1BAF9F] 
      text-white text-xl font-medium 
      shadow-[0_0_40px_rgba(46,211,183,0.25)]
      transition-all duration-300 hover:scale-105">

      <span className="pl-4 font-medium">Let’s Connect</span>

      <div className="w-10 h-10 flex ml-2 items-center justify-center rounded-full bg-white">
        <ArrowRightIcon
          className="w-6 h-6 text-[#1BAF9F]"
          strokeWidth={1.8}
        />
      </div>
    </button>

  </div>

</section>
        </div>
      </section>
    </div>
  );
};

export default About;