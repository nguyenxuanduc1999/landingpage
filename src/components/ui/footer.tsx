import React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SkyToggle } from "./sky-toggle"
import { cn } from "@/lib/utils"

interface Footer7Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  sections?: Array<{
    title: string
    links: Array<{ name: React.ReactNode; href: string }>
  }>
  description?: string
  socialLinks?: Array<{
    icon: React.ReactElement
    href?: string
    label: string
  }>
  copyright?: string
  legalLinks?: Array<{
    name: string
    href: string
  }>
  forceLightMode?: boolean
}

const defaultSections = [
  // {
  //   title: "Product",
  //   links: [
  //     { name: "Overview", href: "#" },
  //     { name: "Pricing", href: "#" },
  //     { name: "Marketplace", href: "#" },
  //     { name: "Features", href: "#" },
  //   ],
  // },
  // {
  //   title: "Company",
  //   links: [
  //     { name: "About", href: "#" },
  //     { name: "Team", href: "#" },
  //     { name: "Blog", href: "#" },
  //     { name: "Careers", href: "#" },
  //   ],
  // },
  {
    title: "Contact",
    links: [
      
      { 
        name: (
          <span className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Karlsruhe
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
  { icon: <SkyToggle className="scale-50" />, label: "Day/Night Toggle" },
]

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
]

export const Footer = ({
  logo = {
    url: "https://www.xdn74.com",
    src: "/logoXDN.png",
    alt: "logo",
    title: "Xuan Duc Nguyen",
  },
  sections = defaultSections,
  description = "This is my personal project and my skills. The Toggle button here is just for decoration.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} XDN. All rights reserved.`,
  legalLinks = defaultLegalLinks,
  forceLightMode = false,
}: Footer7Props) => {
  return (
    <section
      className={cn(
        "py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8",
        forceLightMode &&
          "bg-white text-slate-900 [&_.text-muted-foreground]:!text-slate-600 [&_.border-t]:!border-slate-200 [&_.hover\\:text-primary:hover]:!text-slate-900",
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex flex-wrap items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8 w-8 rounded object-cover" />
              </a>
              <h2 className="text-lg sm:text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-full text-sm text-muted-foreground md:max-w-[70%]">{description}</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  {social.href ? (
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  ) : (
                    <span className="inline-flex items-center" aria-label={social.label}>
                      {social.icon}
                    </span>
                  )}
                </li>
              ))}
            </ul>
                 
          </div>
          <div className="grid w-full gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
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
