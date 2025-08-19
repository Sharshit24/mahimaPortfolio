"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  // BarChart3,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
  Star,
  CheckCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import imageLogo from "@/assests/imageLogo.jpg"

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isIntersecting]
}

// Loading skeleton component
function LoadingSkeleton({ className = "" }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
}

// Animated text component
function AnimatedText({ children, className = "", delay = 0 }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function DigitalMarketingPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Handle mounting and dark mode
  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-4" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full animate-pulse mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Portfolio</h2>
          <p className="text-gray-600">Preparing your digital marketing experience...</p>
          <div className="mt-4 w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-700 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <AnimatedText>
            <div className="text-2xl font-bold text-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer">
              Mahima
            </div>
          </AnimatedText>
          <div className="hidden md:flex space-x-8">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
              <AnimatedText key={item} delay={index * 100}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </AnimatedText>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <AnimatedText delay={500}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Get Started
              </Button>
            </AnimatedText>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* First Portion - Main Content */}
            <div className="lg:col-span-1 space-y-8">
              <AnimatedText delay={200}>
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 hover:scale-105 transition-transform duration-300 animate-bounce">
                  Digital Marketing Expert
                </Badge>
              </AnimatedText>

              <AnimatedText delay={400}>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight hover:scale-105 transition-transform duration-500">
                  Grow Your Business with
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    {" "}
                    Digital Excellence
                  </span>
                </h1>
              </AnimatedText>

              <AnimatedText delay={600}> 
                <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-blue-800 transition-color duration-300">
                  I help businesses scale their online presence through data-driven digital marketing strategies,
                  creative campaigns, and measurable results.
                </p>
              </AnimatedText>

              <AnimatedText delay={800}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 bg-transparent hover:bg-gray-100 hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                  >
                    <Phone className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Schedule a Call
                  </Button>
                </div>
              </AnimatedText>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "150+", label: "Projects Completed" },
                  { number: "300%", label: "Average ROI" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "5", label: "Years Experience" },
                ].map((stat, index) => (
                  <AnimatedText key={index} delay={1000 + index * 100}>
                    <div className="text-center group cursor-pointer hover:scale-110 transition-all duration-300 p-4 rounded-lg hover:bg-blue-50">
                      <div className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>

            {/* Second Portion - User Photo */}
            <div className="lg:col-span-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 h-[400px] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 blue-card blue-glow">
                    <Image
                      src={imageLogo}
                      alt="Mahima - Digital Marketing Professional"
                      width={350}
                      height={350}
                      className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 object-cover"
                    />
                  </div>

                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white transition-colors duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <AnimatedText>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:scale-105 transition-transform duration-300">
                Services
              </Badge>
            </AnimatedText>
            <AnimatedText delay={200}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:scale-105 transition-transform duration-300">
                What I Do Best
              </h2>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-blue-800 transition-color duration-300">
              Regular updates on Facebook, Instagram to maintain visibility. Meta ads, Instagram ads. get verified on google business. Make your own place in the market.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO & SEM",
                description:
                  "Boost your search rankings and drive qualified traffic with strategic SEO and paid search campaigns.",
                color: "blue",
                features: ["Keyword Research", "On-Page Optimization", "Google Ads Management"],
              },
              {
                icon: Users,
                title: "Social Media Marketing",
                description: "Build brand awareness and engage your audience across all major social platforms.",
                color: "purple",
                features: ["Content Strategy", "Community Management", "Paid Social Campaigns"],
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Create personalized email campaigns that convert prospects into loyal customers.",
                color: "green",
                features: ["Campaign Design", "Automation Setup", "A/B Testing"],
               },
              // {
              //   icon: BarChart3,
              //   title: "Analytics & Reporting",
              //   description: "Track performance and optimize campaigns with comprehensive data analysis.",
              //   color: "orange",
              //   features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis"],
              // },
              // {
              //   icon: Target,
              //   title: "Content Marketing",
              //   description: "Develop compelling content that attracts, engages, and converts your target audience.",
              //   color: "red",
              //   features: ["Content Strategy", "Blog Writing", "Video Marketing"],
              // },
              // {
              //   icon: Zap,
              //   title: "Conversion Optimization",
              //   description: "Maximize your website's potential with data-driven conversion rate optimization.",
              //   color: "indigo",
              //   features: ["Landing Page Optimization", "User Experience Testing", "Funnel Analysis"],
              // },
            ].map((service, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 cursor-pointer overflow-hidden relative blue-card blue-glow">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 group-hover:drop-shadow-sm transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 group-hover:scale-125 transition-transform duration-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gray-50 transition-colors duration-500">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <AnimatedText>
        <Badge className="mb-4 bg-purple-100 text-purple-800 hover:scale-105 transition-transform duration-300">
          Portfolio
        </Badge>
      </AnimatedText>
      <AnimatedText delay={200}>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:scale-105 transition-transform duration-300">
          Success Stories
        </h2>
      </AnimatedText>
      <AnimatedText delay={400}>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real results for real businesses across various industries
        </p>
      </AnimatedText>
    </div>
</div>
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl">
    {[
      {
        title: "SaaS Lead Generation",
        subtitle: "B2B Software Company",
        gradient: "from-green-400 to-green-600",
      },
      {
        title: "Local Restaurant Chain",
        subtitle: "Multi-location Marketing",
        gradient: "from-purple-400 to-purple-600",
      },
    ].map((project, index) => (
      <AnimatedText key={index} delay={index * 200}>
        <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group cursor-pointer bg-white blue-card blue-glow">
          <div
            className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800 group-hover:text-blue-600 group-hover:drop-shadow-sm transition-all duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {project.subtitle}
            </CardDescription>
          </CardHeader>
        </Card>
      </AnimatedText>
    ))}
  </div>
</div>

  
</section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white transition-colors duration-500">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="group">
              <AnimatedText>
                <Badge className="mb-4 bg-green-100 text-green-800 hover:scale-105 transition-transform duration-300">
                  About Me
                </Badge>
              </AnimatedText>
              <AnimatedText delay={200}>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
                  Passionate About Digital Growth
                </h2>
              </AnimatedText>
              <AnimatedText delay={400}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-blue-800 transition-color duration-300">
                  With over 5 years of experience in digital marketing, I've helped businesses of all sizes achieve
                  remarkable growth through strategic online marketing initiatives. My approach combines creativity with
                  data-driven insights to deliver measurable results.
                  <br></br>
                  I specialize in creating comprehensive digital marketing strategies that not only increase visibility
                  but also drive meaningful engagement and conversions. Every campaign is tailored to your unique
                  business goals and target audience.
                </p>
              </AnimatedText>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <AnimatedText delay={800}>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {[
                        "Google Ads Certified",
                        "Google Analytics Expert",
                        "Facebook Blueprint",
                        "HubSpot Certified",
                      ].map((cert, index) => (
                        <li key={index} className="hover:text-blue-600 transition-colors duration-300">
                          • {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedText>
                <AnimatedText delay={1000}>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {[
                        "Performance Marketing",
                        "Marketing Automation",
                        "Conversion Optimization",
                        "Brand Strategy",
                      ].map((skill, index) => (
                        <li key={index} className="hover:text-purple-600 transition-colors duration-300">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedText>
              </div>

              <AnimatedText delay={1200}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 hover:shadow-lg transition-all duration-300">
                  Download Resume
                </Button>
              </AnimatedText>
            </div>

            <AnimatedText delay={400}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={imageLogo}
                    alt="Digital Marketing Professional"
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Enhanced Floating Stats */}
                {/* <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 hover:scale-110 hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500 animate-pulse" />
                    <div>
                      <div className="text-sm font-semibold">Average ROI</div>
                      <div className="text-2xl font-bold text-green-600">300%</div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 hover:scale-110 hover:shadow-xl transition-all duration-300 group-hover:-rotate-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
                    <div>
                      <div className="text-sm font-semibold">Client Rating</div>
                      <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 transition-colors duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <AnimatedText>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:scale-105 transition-transform duration-300">
                Contact
              </Badge>
            </AnimatedText>
            <AnimatedText delay={200}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:scale-105 transition-transform duration-300">
                Let's Work Together
              </h2>
            </AnimatedText>
            <AnimatedText delay={400}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-blue-800 transition-color duration-300">
                Ready to take your digital marketing to the next level? Let's discuss your project.
              </p>
            </AnimatedText>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <AnimatedText>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
                  Get in Touch
                </h3>
              </AnimatedText>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "hello@digitalpro.com", color: "blue" },
                  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", color: "green" },
                  { icon: MessageSquare, title: "Response Time", value: "Within 24 hours", color: "purple" },
                ].map((contact, index) => (
                  <AnimatedText key={index} delay={200 + index * 100}>
                    <div className="flex items-center space-x-4 hover:translate-x-4 transition-transform duration-300 group cursor-pointer">
                      <div
                        className={`w-12 h-12 bg-${contact.color}-100 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}
                      >
                        <contact.icon className={`w-6 h-6 text-${contact.color}-600`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {contact.title}
                        </div>
                        <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedText delay={800}>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Free Consultation</h4>
                  <p className="text-sm text-gray-600">
                    Book a 30-minute strategy call to discuss your digital marketing goals and challenges.
                  </p>
                </div>
              </AnimatedText>
            </div>

            <AnimatedText delay={600}>
              <Card className="shadow-lg border-0 bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 blue-card blue-glow max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle className="text-gray-800">Send a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                      <Input
                        placeholder="John"
                        className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Company</label>
                    <Input
                      placeholder="Your Company Name"
                      className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Project Budget</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md hover:scale-105 focus:scale-105 transition-transform duration-300">
                      <option>Select budget range</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project and goals..."
                      className="min-h-[120px] hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 transition-colors duration-500">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedText>
              <div className="hover:translate-y-2 transition-transform duration-300">
                <div className="text-2xl font-bold mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  Mahima
                </div>
                <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                  Helping businesses grow through strategic digital marketing.
                </p>
                <div className="flex space-x-4">
                  {[Globe, Mail, MessageSquare].map((Icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {[
              {
                title: "Services",
                items: ["SEO & SEM", "Social Media Marketing", "Email Marketing", "Content Marketing"],
              },
              { title: "Company", items: ["About", "Portfolio", "Blog", "Contact"] },
              { title: "Contact Info", items: ["hello@digitalpro.com", "+1 (555) 123-4567", "New York, NY"] },
            ].map((section, index) => (
              <AnimatedText key={index} delay={200 + index * 100}>
                <div className="hover:translate-y-2 transition-transform duration-300">
                  <h4 className="font-semibold mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={800}>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p className="hover:text-white transition-colors duration-300">
                &copy; 2024 DigitalPro. All rights reserved.
              </p>
            </div>
          </AnimatedText>
        </div>
      </footer>
    </div>
  )
}
