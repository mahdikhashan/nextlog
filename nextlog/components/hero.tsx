function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray flex flex-col justify-center items-center w-full">
      <div className="absolute bg-accent size-[1000px] rounded-full blur-[100px] opacity-30 bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[90%]" />
      <div className="mx-auto max-w-2xl text-center flex flex-col justify-center h-96 px-4 sm:px-6 lg:px-8 z-10">
        <h1
          className="text-primary
        font-main max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto"
        >
          What's{" "}
          <span className="bg-gradient-to-tl from-primary to-accent to-80% bg-clip-text text-transparent">
            New
          </span>
        </h1>
        <p className="text-muted text-lg leading-6 mt-4 text-balance">
          Discover the latest news and updates from the Nuxt community. Stay up
          to date with NuxtJS releases and upcoming events.
        </p>
        <form
          className="mt-6 flex justify-center"
          // @submit.prevent="loadData"
        >
          <input
            v-model="email"
            type="text"
            placeholder="Your email"
            className="w-full px-4 py-1 rounded-md shadow-sm sm:max-w-xs bg-primary text-primary outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary border-2 border-gray"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-1 ml-4 text-base font-medium text-inverted bg-accent border border-transparent rounded-md shadow-sm hover:bg-accent-hover"
          >
            <span className="flex items-center gap-2">
              Subscribe
              <i
                v-if="status === 'pending'"
                className="i-lucide-loader animate-spin text-inverted size-4"
              />
            </span>
          </button>
        </form>
        <div className="flex items-center gap-4 text-primary justify-center mt-4">
          {/* <NuxtLink
          v-for="social in socials"
          :key="social.name"
          :to="social.url"
          :class="`${social.icon} size-6 text-2xl text-primary cursor-pointer hover:text-accent transition-colors duration-300`"
        /> */}
        </div>
      </div>
    </div>
  );
}

export { Hero };
