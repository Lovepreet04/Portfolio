import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder certificate images (replace with your own in /public and update paths)
import cert1 from "/cert1.png"; 
import cert2 from "/cert2.png"; 
import cert3 from "/cert3.png"; 
import cert4 from "/cert4.png"; 

const certifications = [
    {
      id: 1,
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      image: cert1, // Replace with actual image path
      date: "Jun 2025",
      credentialId: "xFsQLCKfj7HSsEoXz",
      description: "Completed comprehensive data analytics simulation covering real-world business scenarios and data-driven decision making.",
      skills: ["Data Analytics", "Business Intelligence", "Data Visualization"],
      verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_xFsQLCKfj7HSsEoXz_1718524042686_completion_certificate.pdf"
    },
    {
      id: 2,
      title: "Deloitte Australia - Technology Job Simulation",
      issuer: "Forage",
      image: cert2,   
      date: "Jun 2025",
      credentialId: "FT7NsRLSLg5Kvr7xo",
      description: "Hands-on technology simulation focusing on software development processes and technical solutions.",
      skills: ["Data Structures", "Formal Communication", "Planning", "Python", "Software Development Process"],
      verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_8NZqTHPcf4N6eKfHk_1749201586276_completion_certificate.pdf"
    },
    {
      id: 3,
      title: "Entrepreneurship Essentials",
      issuer: "NPTEL",
      image: cert3,
      date: "May 2025",
      credentialId: "NPTEL25GE11S1244000889",
      description: "Comprehensive course covering fundamental concepts of entrepreneurship, business planning, and startup strategies.",
      skills: ["Entrepreneurship", "Business Planning", "Innovation"],
      verificationUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/127/noc25-ge11/Course/NPTEL25GE11S124400088904549463.pdf"
    },
    {
      id: 4,
      title: "Anaconda Python for Data Science",
      issuer: "Anaconda, Inc.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQH3B2-GfeWJTw/feedshare-shrink_1280/B56ZUPsVQNHoAk-/0/1739725034816?e=1754524800&v=beta&t=GREj_cZRVmNar0crDbt9l3qQ7Xg_5SYbOHAjmQWTHy0",
      date: "Feb 2025",
      credentialId: "55e9c7502e0f046ffefe7eeee76a7216131986eabec0060027b56fdc1bb6ba46",
      description: "Specialized certification in Python programming for data science applications using Anaconda environment.",
      skills: ["Python", "Data Science", "Anaconda", "Data Analysis"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/55e9c7502e0f046ffefe7eeee76a7216131986eabec0060027b56fdc1bb6ba46?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDG2YjFu2TeCSTnYr%2FaVC3Q%3D%3D"
    },
    {
      id: 5,
      title: "Career Essentials in GitHub",
      issuer: "GitHub",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGWYbcsFOmlsg/feedshare-shrink_1280/B56ZUPlWC_HsAk-/0/1739723203004?e=1754524800&v=beta&t=x27XotNbGQMy5w_6fCbGChiDhZQInmoNuOanPjFLSa4",
      date: "Feb 2025",
      credentialId: "1724211f8bf22b1f241af57c283a68b83651500ddcf8151f60803f6f109cb3c3",
      description: "Essential skills for version control, collaboration, and project management using GitHub platform.",
      skills: ["GitHub", "Version Control", "Git", "Collaboration"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/1724211f8bf22b1f241af57c283a68b83651500ddcf8151f60803f6f109cb3c3?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDG2YjFu2TeCSTnYr%2FaVC3Q%3D%3D"
    },
    {
      id: 6,
      title: "Essential Skills in Adobe Photoshop 2024",
      issuer: "Adobe",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQGZOpDlOHZJ3w/feedshare-shrink_1280/B4EZU5RjI0HgAo-/0/1740422656842?e=1754524800&v=beta&t=NSS4P20-cj2rhismd1E6SRSuvWqIFd44M5zsMG2RQnc",
      date: "Feb 2025",
      credentialId: "eefa1cb30dc6d0be8c0d10b67d99a968137abd535158b20bd53616a1583bdf7e",
      description: "Comprehensive training in Adobe Photoshop 2024 covering design fundamentals and advanced techniques.",
      skills: ["Adobe Photoshop", "Graphic Design", "Image Editing", "Creative Suite"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/eefa1cb30dc6d0be8c0d10b67d99a968137abd535158b20bd53616a1583bdf7e"
    },
    {
      id: 7,
      title: "Microsoft Copilot for Productivity",
      issuer: "Microsoft AI",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGWTAPkLaON4g/feedshare-shrink_1280/B56ZTYhLbkGQAk-/0/1738799364081?e=1754524800&v=beta&t=hV07fRurBlBS-KwwpMTRAzKosmtkFTMi7xkUotssxVk",
      date: "Feb 2025",
      credentialId: "e516cbc32c5cb51630075ce8a954691d1fd16cf1fcc3cb506f36cdefe9cb057d",
      description: "Training on leveraging Microsoft Copilot for enhanced productivity and AI-assisted workflows.",
      skills: ["Microsoft Copilot", "AI Tools", "Productivity", "Automation"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/e516cbc32c5cb51630075ce8a954691d1fd16cf1fcc3cb506f36cdefe9cb057d"
    },
    {
      id: 8,
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQGurd6qkOd4fA/feedshare-shrink_1280/B4EZU5VP7NG0Ao-/0/1740423626748?e=1754524800&v=beta&t=0qPkf0k-xObq0ATZVsEqSWmI0KTQPSIrBjiPFeuU6Ds",
      date: "Jan 2025",
      credentialId: "a47a68e6e11085f4b75e69654001858a4e59f651a4f67030d6d6c436bb0d1255",
      description: "Comprehensive certification in generative AI technologies, applications, and career opportunities.",
      skills: ["Generative AI", "Machine Learning", "AI Applications", "ChatGPT"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/a47a68e6e11085f4b75e69654001858a4e59f651a4f67030d6d6c436bb0d1255"
    },
    {
      id: 9,
      title: "Data Mining",
      issuer: "Great Learning",
      image: cert4,
      date: "Sep 2024",
      credentialId: "YRSPIKPF",
      description: "Advanced certification in data mining techniques, algorithms, and practical applications.",
      skills: ["Data Mining", "Data Warehousing", "Machine Learning", "Analytics"],
      verificationUrl: "https://www.mygreatlearning.com/certificate/YRSPIKPF"
    },
    {
      id: 10,
      title: "Typing Certificate",
      issuer: "Ratatype",
      image: "https://www.ratatype.com/certificates/en/en/8/1/0/7072810.webp?0",
      date: "Jun 2024",
      credentialId: "7072810",
      description: "Professional typing certification demonstrating fast and accurate typing skills.",
      skills: ["Typing", "Productivity", "Keyboard Skills"],
      verificationUrl: "https://www.ratatype.com/u7072810/certificate/en/"
    },
    {
      id: 11,
      title: "Build and Secure Networks in Google Cloud",
      issuer: "Google Cloud",
      image: "https://cdn.qwiklabs.com/6QsPX5Wdg0eHWFed3ZKTbX2c88yVFGgaWPlYt%2BJdp4Q%3D",
      date: "Oct 2023",
      credentialId: "5790703",
      description: "Advanced certification in Google Cloud networking and security implementation.",
      skills: ["Google Cloud", "Network Security", "Cloud Architecture", "VPC"],
      verificationUrl: "https://www.cloudskillsboost.google/public_profiles/79f5852a-94e9-4523-9db7-81232f7b6cde/badges/5790703"
    },
    {
      id: 12,
      title: "Tally Certified",
      issuer: "Tally Champion",
      image: "https://media.licdn.com/dms/image/v2/D562DAQHl04x5_Kx-HA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1715707242874?e=1752256800&v=beta&t=DpkX33PPF55-0vSTC_Fa9jelKJghDwD5GFVCT4vmQoA",
      date: "Sep 2021",
      credentialId: "CI275021",
      description: "Professional certification in Tally ERP software for accounting and business management.",
      skills: ["Tally ERP", "Accounting", "Business Management", "Financial Software"],
      verificationUrl: "#"
    }
  ];

export default function CertificationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change 3000 to your desired interval in ms
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="certifications" className="relative z-10 py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of my professional certifications and achievements
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {certifications.map(cert => (
                <div
                  key={cert.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_33.3333%] px-4"
                >
                  <div className="glass-morphism rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 mx-2 h-full">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-cyan-500 bg-white"
                      style={{ objectFit: 'contain', background: 'white' }}
                    />
                    <h3 className="text-lg font-bold mb-1 text-white text-center">{cert.title}</h3>
                    <div className="text-xs text-cyan-400 font-semibold mb-1 text-center">{cert.issuer}</div>
                    <div className="text-xs text-gray-400 mb-2 text-center">
  {cert.date} | ID: 
  <span title={cert.credentialId}>
    {cert.credentialId.length > 10
      ? cert.credentialId.slice(0, 8) + "..."
      : cert.credentialId}
  </span>
</div>
                    <p className="text-gray-300 text-sm text-center mb-2">{cert.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-3">
                      {cert.skills && cert.skills.map((skill, idx) => (
                        <span key={idx} className="bg-cyan-700/60 text-cyan-100 px-2 py-1 rounded text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300 shadow"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-cyan-600 text-white rounded-full p-2 shadow-lg z-10"
            onClick={scrollPrev}
            aria-label="Previous"
            style={{ display: certifications.length > 1 ? 'block' : 'none' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-cyan-600 text-white rounded-full p-2 shadow-lg z-10"
            onClick={scrollNext}
            aria-label="Next"
            style={{ display: certifications.length > 1 ? 'block' : 'none' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 