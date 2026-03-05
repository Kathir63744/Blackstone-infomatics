"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBAnner from "./components/HeroBAnner";
import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import SpotlightText from "./components/SpotlightTeaxt";
import TechCard from "./components/TechCard";
import { ArrowBigDownIcon, ArrowBigRight, ArrowDownAZ, ArrowDownCircle, ArrowRightIcon, ArrowRightLeftIcon, ArrowUpFromLine, ArrowUpRight } from "lucide-react";
import RotatingTab from "./components/RotatingTab";

type ServiceItem = {
  title: string;
  content: string;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const services: ServiceItem[] = [
  {
    title: "Web Development",
    content:
      "We build scalable and secure web applications using modern frameworks like React and Next.js. Optimized for performance and SEO.",
  },
  {
    title: "UI & UX Design",
    content:
      "User-focused design solutions that improve engagement and increase product usability across devices.",
  },
  {
    title: "Graphic Design",
    content:
      "Professional branding, marketing creatives and digital assets that strengthen your brand identity.",
  },
  {
    title: "Digital Marketing",
    content:
      "Data-driven marketing strategies including SEO, paid ads and social growth campaigns.",
  },
  {
    title: "App Development",
    content:
      "Custom mobile app development for iOS and Android with scalable backend architecture.",
  },
  {
    title: "Voice Process",
    content:
      "Professional voice support solutions designed to enhance customer communication.",
  },
];

  const testimonials = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      name: "Sarah Smith",
      role: "Lead Developer, Google",
      img: "/a1.png",
    },
    {
      text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      name: "John Carter",
      role: "Product Manager, Meta",
      img: "/a1.png",
    },
  ];

const works = [
  {
    logo: "/bl.png",
    title: "Blackstone Academy",
    image: "/web0.png",
    description: `Blackstone Academy is a modern learning platform designed to provide high-quality education. 
It offers interactive courses and structured programs for all levels. 
Students can track their progress in real-time for effective learning. 
The platform includes quizzes, assignments, and feedback features. 
`
  },
  {
    logo: "/sl1.png",
    title: "E-Commerce Platform",
    image: "/web1.jpg",
    description: `A scalable e-commerce solution built for a seamless shopping experience. 
It features secure and fast payment gateways. 
Users can browse products with smart filters and search options. 
The platform supports real-time inventory and order management. 
`
  },
  {
    logo: "/sl2.png",
    title: "Portfolio Website",
    image: "/web2.jpg",
    description: `A modern portfolio platform designed for creatives and professionals. 
It showcases projects with elegant layouts and smooth animations. 
Responsive design ensures accessibility on all devices. 
Supports image galleries, videos, and project descriptions. 
`
  },
  {
    logo: "/sl3.png",
    title: "Healthcare Dashboard",
    image: "/web3.jpg",
    description: `A real-time healthcare management system for hospitals and clinics. 
Provides patient analytics and monitoring tools. 
Doctors can view medical records and update treatment plans. 
Includes appointment scheduling and notifications. 
`
  },
  {
    logo: "/sl4.png",
    title: "CRM Software",
    image: "/web4.jpg",
    description: `A customer relationship management platform to enhance business efficiency. 
Automates workflows and sales pipelines for teams. 
Tracks customer interactions and engagement history. 
Generates detailed analytics and performance reports. .`
  },
  {
    logo: "/sl5.png",
    title: "Finance App",
    image: "/web5.jpg",
    description: `A modern finance dashboard for personal and business users. 
Provides real-time financial tracking and analytics. 
Visualizes spending, income, and investment data clearly. 
Supports budgeting tools and automated alerts. `
  }
];

export default function Home() {
      const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
      const [active, setActive] = useState(0);
      const [openItems, setOpenItems] = useState<number[]>([]);
      const [activeWork, setActiveWork] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveWork((prev) =>
      prev === works.length - 1 ? 0 : prev + 1
    );
  }, 7000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="bg-black">
     <Navbar/>
     <HeroBAnner/>
     
     {/* Section 1: Services - 80px padding bottom */}
<section className="relative bg-black h-[750px] flex items-center pb-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-stretch h-full">

    {/* LEFT SIDE */}
    <div className="relative h-full bg-[#272626] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col ">

      {/* Floating Badge */}
      <div className="absolute -top-10 -left-8 z-10">
        <div className="relative w-fit rounded-[24px] p-[1px] animated-border">
          <div className="relative rounded-[24px] px-10 py-6 backdrop-blur-xl badge-shimmer overflow-hidden">
            <h3 className="text-4xl font-bold text-white relative z-10">
              87%
            </h3>
            <p className="text-sm text-[#DEDEDE] mt-2 relative z-10">
              of customers recommend this company
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/our-services.png"
        alt="Our Services"
        width={600}
        height={450}
        className="rounded-xl w-full h-auto"
      />

      <div className="mt-6">
        <h3 className="text-white text-xl font-semibold">
          ✨ Digital Solutions Built for Growth
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed text-sm">
          We design and develop powerful digital solutions tailored to modern
          business needs. Our team blends strategy, creativity, and advanced
          technology to build scalable platforms that accelerate growth.
          From custom web applications to seamless digital experiences,
          every solution is crafted with precision and performance in mind.
          We focus on innovation, operational efficiency, and long-term
          value creation to help brands succeed in a competitive market.
        </p>
      </div>
    </div>
<div className="text-white flex flex-col h-full px-6 overflow-hidden">

  <RotatingTab
    title="Our Services"
    className="rounded-md mb-6 text-center flex items-center justify-center w-[130px] h-[40px] text-sm"
  />

  <SpotlightText
    text="Introducing our Services"
    className={`${spaceGrotesk.className} text-[40px] mt-4 leading-tight font-extrabold`}
  />

  <div className="flex flex-col flex-1 mt-8 min-h-0 overflow-hidden">

    {/* SCROLL AREA */}
    <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">

      {services.map((service, index) => {
        const isOpen = openItems.includes(index);

        return (
          <div key={index} className="border-b border-white/10 py-5">

            <button
              onClick={() => {
                if (isOpen) {
                  setOpenItems(openItems.filter(i => i !== index));
                } else {
                  setOpenItems([...openItems, index]);
                }
              }}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium">
                {service.title}
              </span>

              <span className="text-2xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[300px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.content}
              </p>

              <div className="h-[2px] bg-teal-500 mt-5 w-full"></div>
            </div>

          </div>
        );
      })}

    </div>

    {/* BUTTON */}
    <div className="pt-6 flex justify-end shrink-0">
      <button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-medium transition">
        View All Services
      </button>
    </div>

  </div>
</div>
  </div>
</section>

     {/* Section 2: Technology Stack - 80px padding top and bottom */}
    <section className="w-full py-24 flex flex-col items-center text-center relative py-20">
      {/* Badge */}
      <RotatingTab
  title="Technologies we use"
  className="rounded-md mb-6 text-center pt-2 w-[180px] h-[40px] text-sm"
/>

      {/* Heading */}
      <SpotlightText
        text="Our Technology Stack"
        className={`${spaceGrotesk.className} text-[40px] md:text-[40px] leading-tight font-extrabold`}
      />

{/* Tech Grid */}
<div className="mt-16 flex flex-col items-center gap-8 max-w-6xl w-full">

  {/* Row 1 — 4 */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
    <TechCard logo="/tech-photos/java.png" title="Java" />
    <TechCard logo="/tech-photos/python.png" title="Python" />
    <TechCard logo="/tech-photos/Docker.png" title="Docker" />
    <TechCard logo="/tech-photos/NET core.png" title=". NET" />
  </div>

  {/* Row 2 — 5 */}
  <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 justify-items-center">
    <TechCard logo="/tech-photos/mongodb.png" title="Mongo DB" />
    <TechCard logo="/tech-photos/redis.png" title="Redis" />
    <TechCard logo="/tech-photos/js.png" title="JavaScript" />
    <TechCard logo="/tech-photos/nodejs.png" title="Node JS" />
    <TechCard logo="/tech-photos/html.png" title="HTML5" />
  </div>

  {/* Row 3 — 4 */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
    <TechCard logo="/tech-photos/git.png" title="Git" />
    <TechCard logo="/tech-photos/react.png" title="React" />
    <TechCard logo="/tech-photos/next.png" title="Next.js" />
    <TechCard logo="/tech-photos/css.png" title="CSS" />
  </div>

</div>

    </section>

     {/* Section 3: Work Process - 80px padding top and bottom */}
        <section className="w-full -mt-8 flex justify-center bg-black text-white py-20">

  {/* Inner Container */}
  <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-start">

<RotatingTab
  title="Work Process"
  className="rounded-md mb-6 -ml-12 text-center pt-2 w-[140px] h-[40px] text-sm"
/>

    {/* Heading */}
    <SpotlightText
      text="The Smart Process Behind Every Project"
      className={`${spaceGrotesk.className} text-[42px] mt-6 leading-tight -ml-10 font-extrabold text-left`}
    />

    {/* Timeline */}
    <div className="w-full mt-20 relative">

      {/* Horizontal Line */}
      <div className="absolute top-[150px] left-0 w-[950px] h-[1px] bg-gray-700"></div>

      <div className="grid grid-cols-1  md:grid-cols-5 relative">

        {[
          {
            number: "01",
            title: "Discovery",
            desc: "We understand your business goals, analyze requirements, and identify the right technology approach."
          },
          {
            number: "02",
            title: "Planning & Design",
            desc: "We create wireframes, UI designs, and technical architecture."
          },
          {
            number: "03",
            title: "Development",
            desc: "Our team builds secure, high-performance solutions."
          },
          {
            number: "04",
            title: "Testing & Launch",
            desc: "We test for performance and usability before deployment."
          },
          {
            number: "05",
            title: "Support",
            desc: "We provide continuous monitoring and updates."
          }
        ].map((step, index) => (
          <div key={index} className="relative flex flex-col items-center md:items-start">

            {/* Big Outline Number */}
            <h2 className="text-[90px]  font-bold text-transparent number-outline">
  {step.number}
</h2>

            {/* Dot (Perfectly Centered) */}
            <div className="absolute top-[142px] w-5 h-5 bg-[#14B8A6] rounded-full border-[3px] border-black"></div>

            {/* Content */}
            <div className="mt-16 text-center md:text-left px-2">

              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-[#9A9A9A]/80 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>

     {/* Section 4: Our Works - 80px padding top */}
<section className="w-full -mt-10 bg-black flex flex-col items-center relative overflow-hidden pt-20">
  <RotatingTab
    title="Our Works"
    className="rounded-md mb-1 text-center pt-2 w-[110px] h-[40px] text-sm"
  />

  <SpotlightText
    text="Explore Our Exceptional Work"
    className={`${spaceGrotesk.className} text-[42px] mt-6 mb-12 leading-tight font-extrabold text-white`}
  />

  <div className="w-full max-w-7xl mx-auto px-6">
    <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 justify-center">
      {works.map((work, index) => (
        <div
          key={index}
          onClick={() => setActiveWork(index)}
          className={`min-w-[185px] h-[63px] border-4 cursor-pointer transition-all duration-500
            snap-center
            flex items-center justify-center
            rounded-md
            ${activeWork === index
              ? "border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] scale-105"
              : "border-transparent hover:border-emerald-400"
            }
            bg-white
          `}
        >
          <img
            src={work.logo}
            alt="client logo"
            className="h-10 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Section 5: Project Showcase - 80px padding bottom */}
<section className="w-full py-20 flex bg-black items-center justify-center pb-20">

  <div className="flex items-center gap-20 max-w-7xl w-full px-10">

    {/* Laptop */}
    <div className="relative w-[620px] h-[360px]">

      {/* Laptop Frame */}
      <Image
        src="/lap.png"
        alt="Laptop"
        fill
        className="object-contain"
      />

      {/* Screen Image */}
      <div className="absolute top-[20px] left-[12%] w-[475px] h-[305px] overflow-hidden rounded-md">
        <Image
          src={works[activeWork].image}
          alt="Project Preview"
          fill
          className="object-cover transition-all duration-500"
        />
      </div>

    </div>

    {/* Right Content */}
    <div className="max-w-md -mt-50">

      <h1 className="text-[28px] text-white font-medium">
        {works[activeWork].title}
      </h1>

      <p className="text-[18px] text-[#9A9A9A]/80 mt-4 text-justify">
        {works[activeWork].description}
      </p>

    </div>

  </div>
</section>

     {/* Section 6: Testimonials - 80px padding top and bottom */}
<section className="w-full bg-black py-18 flex flex-col items-center text-center py-20">

<RotatingTab
  title="What Our Clients Says"
  className="rounded-md mb-6 text-center pt-2 w-[180px] h-[40px] text-sm"
/>

  {/* Heading */}
    <SpotlightText
      text="Trusted By Clients Blackstone Infomatics"
      className={`${spaceGrotesk.className} text-[42px]  leading-tight font-extrabold text-center`}
    />

  {/* Cards */}
  <div className="w-full max-w-[1250px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

    {[1, 2].map((_, index) => (
      <div
        key={index}
        className="relative border border-white/40 rounded-2xl px-8 py-6 bg-[#0a0a0a]"
      >
        <div className="absolute left-7 top-4 text-white text-5xl opacity-80 font-serif">
  “
</div>

        {/* Text */}
        <p className="text-[#C7C7C7]/90 text-[18px] text-left mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Profile */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="/a1.png"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div className="text-left">
            <h4 className="text-white text-[18px] font-semibold">
              Sarah Smith
            </h4>
            <p className="text-gray-400 text-[14px] ">
              Lead Developer, Google
            </p>
          </div>
        </div>

      </div>
    ))}

  </div>

  {/* Indicator */}
  <div className="flex items-center gap-3 mt-10">
    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
    <div className="w-10 h-2 bg-emerald-400 rounded-full"></div>
    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
  </div>

</section>

<section className="relative w-full py-28 flex flex-col items-center text-center overflow-hidden bg-black">

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
    
  );
}