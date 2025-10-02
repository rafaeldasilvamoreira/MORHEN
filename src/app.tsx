// App.tsx
import { Dashboard } from "./root/dashboard"
import { ServicesPage } from "./root/servicesPage"
import { AboutPage } from "./root/about"
import { ContactPage } from "./root/contact"

export function App() {
  return (
    <div className="w-full">
      <section id="home">
        <Dashboard />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </div>
  )
}
