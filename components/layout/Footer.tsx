import Link from "next/link"
import { Container } from "../ui/Container"
import { InstagramIcon, WhatsAppIcon, EmailIcon } from "../ui/Icons"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl tracking-tight">DEV-TEE</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Business-focused web strategy, design, development, and growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Case Studies", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/the_devtee?igsi=MXY5OTNzYjc0ZG9wcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://wa.link/rounwp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:dev.tee01@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  <EmailIcon className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DEV-TEE. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-700">BUILD. SOLVE. GROW.</span>
        </div>
      </Container>
    </footer>
  )
}
