import { Inter } from "next/font/google";

import { Hero } from "@/components/hero";
import { PostsSection } from "@/components/posts-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} mb-8`}
    >
      <Hero />
      <PostsSection />
    </main>
  );
}
