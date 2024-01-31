import { NextlogConfig } from "@/lib/config"

export default NextlogConfig({
  theme: 'default',
  layout: 'list',
  email: {
    provider: "Resend",
    config: {
      audiences: [
        process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID as string
      ]
    }
  }
})
