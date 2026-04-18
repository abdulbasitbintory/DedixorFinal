import { Navigation } from "@/components/navigation"
import { ServiceCard } from "@/components/service-card"
import { db } from "@/lib/db"

async function getServices() {
  try {
    const services = await db.services.findMany()
    return services.filter(
      (service) =>
        service.title &&
        service.description &&
        service.icon &&
        service.details &&
        service.pricing &&
        service.gradient,
    )
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              <span className=" text-white">Our</span> <span className=" text-blue-300">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Premium development solutions tailored to bring your vision to life with cutting-edge technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-background border border-border/50 backdrop-blur-sm p-12">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                  Let's discuss how we can help you build something exceptional
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="/projects"
                    className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
