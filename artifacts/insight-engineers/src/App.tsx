import React, { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, Database, Cpu, Network, Terminal, Code2, Server, BookOpen, MessageSquare, ArrowRight, Github } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const DISCORD_LINK = "https://discord.gg/your-invite";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-mono font-semibold tracking-tight text-foreground">Insight Engineers</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#focus" className="hover:text-foreground transition-colors">Focus Areas</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        </div>
        <a 
          href={DISCORD_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
        >
          Join Discord
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-30 mask-radial-fade"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            A programming discussion group for serious builders
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
            Insight Engineers
          </h1>
          
          <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-12 tracking-tight">
            Subtle Thought But Meaningful.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            A serious, intellectually-driven software developer community where engineers and data scientists come to think deeply, collaborate on hard problems, and grow. Not a casual chat server — this is where engineers who care about craft show up.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 w-full sm:w-auto"
            >
              Join Discord Community <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Anti-Noise Community</h2>
          <article className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>
              Insight Engineers is a growing community of software engineers and data science developers who believe that the best work comes from deep, uninterrupted focus and rigorous peer review. We grew tired of servers filled with superficial questions, meme channels, and relentless notifications.
            </p>
            <p>
              This is a machine learning discord server and systems engineering hub designed for depth. Whether you are debugging a complex distributed system, optimizing a deep learning model, or debating the architectural tradeoffs of microservices, you will find peers who speak your language.
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

const FOCUS_AREAS = [
  { icon: Code2, title: "Software Engineering", desc: "Backend architecture, systems programming, and robust frontend applications." },
  { icon: Database, title: "Data Science", desc: "Data pipelines, statistical analysis, and data engineering." },
  { icon: BrainCircuit, title: "Machine Learning", desc: "Model architecture, training pipelines, and MLOps." },
  { icon: Network, title: "System Design", desc: "Scalable architecture, distributed systems, and infrastructure." },
  { icon: Cpu, title: "AI/ML Research", desc: "Paper readings, algorithm discussions, and cutting-edge developments." },
  { icon: Github, title: "Open Source", desc: "Collaborative project development and open source contributions." }
];

function FocusAreas() {
  return (
    <section id="focus" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Focus Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join discussions on machine learning, backend systems, AI engineering, and scalable architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <area.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: MessageSquare, title: "High-Signal Discussions", desc: "Heavily moderated channels ensuring discussions remain technical, focused, and valuable." },
  { icon: Server, title: "Project Collaboration", desc: "Find skilled partners for your next ambitious open source or side project." },
  { icon: BookOpen, title: "Learning Resources", desc: "Curated reading lists, paper breakdowns, and technical deep-dives shared by experts." },
];

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Discord server built for collaborative learning and technical growth</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We focus on the craft. Our AI engineering community and software developer community is structured to facilitate meaningful exchange of ideas rather than endless chatter.
            </p>
            
            <div className="space-y-8">
              {FEATURES.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary/5 absolute -top-10 -right-10 blur-3xl w-full h-full"></div>
            <div className="border border-border bg-card rounded-xl p-6 shadow-2xl relative z-10 font-mono text-sm">
              <div className="flex gap-2 mb-4 border-b border-border pb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                <div className="w-3 h-3 rounded-full bg-chart-4/80"></div>
                <div className="w-3 h-3 rounded-full bg-primary/80"></div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p><span className="text-primary">user@system:~$</span> cat rules.txt</p>
                <p className="pl-4 border-l-2 border-primary/30">
                  1. Think deeply before asking.<br/>
                  2. Show your work.<br/>
                  3. Respect the craft.<br/>
                  4. Signal over noise.
                </p>
                <p><span className="text-primary">user@system:~$</span> ./join_community.sh</p>
                <p className="text-foreground animate-pulse">Initializing connection...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join the discussion?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Connect with peers who share your dedication to engineering excellence. No fluff, just pure signal.
          </p>
          <a 
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Join Discord Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono font-semibold tracking-tight">Insight Engineers</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Insight Engineers. Subtle Thought But Meaningful.
          </div>
          
          <div className="flex gap-4">
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground noise-bg w-full overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
