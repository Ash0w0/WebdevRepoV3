import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Code2, Users, Shield, Globe, Rocket, CheckCircle, Zap, Palette, Target } from "lucide-react";

export default function Home() {
  const mailtoLink = "mailto:contact@webdevelopmentsolutions.in?subject=Project%20Inquiry&body=Hi%20Web%20Development%20Solutions%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.%0A%0AProject%20Details%3A%0A-%20Company%3A%20%0A-%20Project%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Team%20Size%20Required%3A%20%0A-%20Additional%20Requirements%3A%20%0A%0ABest%20regards%2C%0AName%3A%20%0APhone%3A%20";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Gradient Animation */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">
              Transforming Tech Talent Acquisition
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build Your Dream Team with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 block mt-2">
                India's Elite Developers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access a curated pool of top-tier developers, vetted through our rigorous selection process.
              Scale your team with precision and confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="group animate-shimmer" asChild>
                <Link href="#contact">
                  Hire Developers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/register">
                  Join as Developer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Developers" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Global Clients" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Modern Cards */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tech solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-12 w-12" />,
                title: "UI/UX Development",
                description: "Beautiful, intuitive interfaces with exceptional user experience"
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Full-Stack Development",
                description: "End-to-end web and mobile application development"
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "DevOps & Cloud",
                description: "Scalable infrastructure and continuous deployment"
              }
            ].map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-none bg-gradient-to-b from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative space-y-4">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Rigorous Vetting",
                description: "Only top 1% of developers make it through our selection process"
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Quick Matching",
                description: "Get matched with the right developers within 48 hours"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Dedicated Support",
                description: "Personal account manager for seamless communication"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Team?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch to discuss your requirements and find the perfect tech professionals for your project.
            </p>
            <Button size="lg" className="group animate-shimmer" asChild>
              <a href={mailtoLink}>
                Start Hiring
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}