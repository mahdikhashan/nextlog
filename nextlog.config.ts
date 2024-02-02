import { NextlogConfig } from "@/lib/config"

export default NextlogConfig({
  theme: 'default',
  layout: 'list',
  emailProvider: {
    provider: "Resend",
    config: {
      audiences: [
        process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID as string
      ]
    }
  },
  socials: [
    {
      name: "Github",
      url: "http://github.com/mahdikhashan/nextlog",
      icon: "https://api.iconify.design/lucide:github.svg"
    },
    {
      name: "Website",
      url: "http://github.com/mahdikhashan/nextlog",
      icon: "https://api.iconify.design/lucide:globe.svg"
    }
  ]
})
