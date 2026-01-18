import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cases from "./components/Cases";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "rgb(231, 215, 197)" }}>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Services />
      <Footer />
    </main>
  );
}
