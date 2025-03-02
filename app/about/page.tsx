export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        <h1 className="text-3xl font-bold mb-8 animate-fade-in">About Us</h1>

        <div className="prose max-w-none animate-fade-in">
          <p>
            Welcome to FoodHub, your go-to destination for delicious meals delivered right to your doorstep. We are
            passionate about connecting food lovers with the best local restaurants and cuisines.
          </p>
          <p>
            Our mission is to make food ordering simple, fast, and enjoyable. Whether you're craving a quick bite or
            planning a feast, FoodHub has got you covered with a wide variety of options to satisfy every palate.
          </p>
          <p>
            We work closely with top-rated restaurants to ensure that you receive high-quality meals every time you
            order. Our user-friendly platform and efficient delivery system are designed to provide you with a seamless
            food ordering experience.
          </p>
          <p>
            Thank you for choosing FoodHub. We look forward to serving you and bringing the flavors of the world to your
            table!
          </p>
        </div>
      </div>
    </main>
  )
}

