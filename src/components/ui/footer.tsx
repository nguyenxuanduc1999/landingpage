import React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

interface Footer7Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  sections?: Array<{
    title: string
    links: Array<{ name: string; href: string }>
  }>
  description?: string
  socialLinks?: Array<{
    icon: React.ReactElement
    href: string
    label: string
  }>
  copyright?: string
  legalLinks?: Array<{
    name: string
    href: string
  }>
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      
      { 
        name: (
          <span className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Karlsruhe, Germany
          </span>
        ), 
        href: "#" 
      },
 
      { name: <a href="mailto:duc@xdn74.com" className="flex items-center hover:text-primary">
        <Mail className="mr-2 h-5 w-5" />
        duc@xdn74.com
      </a>, href: "#" },
      { name: (
        <span className="flex items-center">
          <Phone className="mr-2 h-5 w-5" />
          +49
        </span>
      ), href: "#" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Help", href: "#" },
  //     { name: "Sales", href: "#" },
  //     { name: "Advertise", href: "#" },
  //     { name: "Privacy", href: "#" },
  //   ],
  // },
]

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/xdn74/", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/xdn74/", label: "Facebook" },
  // { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/xdn/", label: "LinkedIn" },
]

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
]

export const Footer = ({
  logo = {
    url: "https://xdn74.com",
    src: "https://lh3.googleusercontent.com/sitesv/AA5AbUB6chkzCJ1XJ2UGc21PZRqXuAGgv33hq_RhcDLwuPV1Gsq2Bto610LzT7WvhdqnBQ3qLDfxbCj5wJ4-FVEdX1-J8bKEx5Vx6yp2jiOcNNeGHellOKotOTFeLUZ90d7zpL59Yzz8L6mOC2UhsCVghJ_REENdtS0UaPkNnSbzaeryCtsoTSm9-lsP7N2cqJgrP_hD8_uIqTmv70I4q0M5IFT5ytxuoTh03OSzmHA=w1280",
    alt: "logo",
    title: "Xuan Duc Nguyen",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Chillbion. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8 w-8 rounded object-cover" />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">{description}</p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
