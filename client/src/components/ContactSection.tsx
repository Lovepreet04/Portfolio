import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id'; // Replace with your EmailJS Service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS Template ID
const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS Public Key

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_f9aoiev",
        "template_dfpp8sl",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: formData.subject,
        },
        "UMlZVAbel-KRcVQrx"
      );
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. Thank you for reaching out!",
        variant: "default",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "Eng.Lovepreet@gmail.com",
      href: "mailto:Eng.Lovepreet@gmail.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Phone",
      value: "+91-9897024130",
      href: "tel:+919897024130",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: "Location",
      value: "Sitarganj, Uttarakhand, India",
      // href: "",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/Lovepreet04",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Lovepreet04",
      color: "bg-gray-700 hover:bg-gray-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.621 20.5 12 20.5 12 20.5s7.379 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: "http://www.youtube.com/@SinghCodeCraft",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      ),
      // href: "#",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and innovation. Feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="glass-morphism rounded-xl p-4 flex items-center space-x-4 hover:bg-white/10 transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-full flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-colors duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    required
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <div className="relative">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    required
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
