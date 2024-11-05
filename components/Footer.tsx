import { Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const mailtoLink = "mailto:contact@webdevelopmentsolutions.in?subject=Project%20Inquiry&body=Hi%20Web%20Development%20Solutions%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.%0A%0AProject%20Details%3A%0A-%20Company%3A%20%0A-%20Project%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Team%20Size%20Required%3A%20%0A-%20Additional%20Requirements%3A%20%0A%0ABest%20regards%2C%0AName%3A%20%0APhone%3A%20";

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">WebDevSolutions</span>
            </div>
            <p className="text-muted-foreground">
              Connecting global businesses with India's top tech talent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">
                  Join As Developer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">UI/UX Development</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Frontend Development</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Backend Development</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">DevOps Engineering</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Business Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={mailtoLink} className="text-muted-foreground hover:text-primary transition-colors">
                  contact@webdevelopmentsolutions.in
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918002822133" className="text-muted-foreground hover:text-primary transition-colors">
                  +91-8002822133
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Web Development Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}