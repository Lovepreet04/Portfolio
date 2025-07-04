import React from "react";

const testimonials = [
  {
    name: "Govind Singh Panwar",
    role: "Head of Department B.Tech CSE, DBUU, Dehradun",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Working with Lovepreet was a fantastic experience. His attention to detail and technical skills are top-notch!"
  },
  {
    name: "Kuldeep Bahuguna",
    role: "Assistant Professor, DBUU, Dehradun",
    photo: "https://media.licdn.com/dms/image/v2/C4D03AQEbsEzVmS0ZqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642517027589?e=1756944000&v=beta&t=4lV42yMbCnpfh8LvCkgIojYSt_uGOz_t9XNpqa5jba4",
    quote: "Working with Lovepreet was a fantastic experience. His attention to detail and technical skills are top-notch!"
  },
  {
    name: "Harpreet Singh Cheema",
    role: "P.D. instructor, ELS plus Soft Skills ( Master Trainer ) ",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQH6PrpzotyiIw/profile-displayphoto-shrink_400_400/B56ZSXaiUjHEAk-/0/1737707113919?e=1756944000&v=beta&t=kU1ej5aRVIT6PAtls5Nif36t7wkfpBvuhmruxrkeMYc",
    quote: "Working with Lovepreet was a fantastic experience. His attention to detail and technical skills are top-notch!"
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-morphism rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-cyan-500" />
              <blockquote className="text-gray-200 italic mb-3">“{t.quote}”</blockquote>
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-cyan-400 text-xs">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 