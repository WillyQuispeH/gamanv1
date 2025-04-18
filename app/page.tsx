"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const features = [
    {
      title: "Automatización Inteligente con IA",
      description:
        "Automatiza tareas repetitivas y flujos de trabajo mediante inteligencia artificial, ahorrando tiempo y reduciendo errores.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Análisis Avanzados con IA",
      description:
        "Obtén información valiosa con análisis predictivos y visualización de datos en tiempo real gracias a la inteligencia artificial.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Colaboración en Equipo Optimizada",
      description:
        "Facilita la comunicación y colaboración en tu equipo mediante herramientas integradas de IA para mejorar la productividad.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Seguridad Inteligente para Empresas",
      description:
        "Protege tus datos con algoritmos de seguridad avanzados basados en IA, cifrado de extremo a extremo y cumplimiento normativo.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Integración de Sistemas con IA",
      description:
        "Conecta tus herramientas favoritas y sistemas externos de manera eficiente a través de nuestra plataforma con IA y API avanzada.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Soporte 24/7 con IA",
      description:
        "Accede a soporte técnico en cualquier momento con nuestro equipo de atención al cliente asistido por inteligencia artificial.",
      icon: <Star className="size-5" />,
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image src="/logoIcon.png" alt="" width={45} height={45} />
            <Image
              src="/namewhite.png"
              alt=""
              width={70}
              height={40}
              className={theme === "light" ? "dark:invert brightness-0" : ""}
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Caracteristicas
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonios
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Portafolio
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a
              href="https://wa.me/56982597210?text=Hola%2C%20Estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full">
                Contáctar
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Caracteristicas
              </Link>
              <Link
                href="#testimonials"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#portfolio"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portafolio
              </Link>
              <Link
                href="#faq"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <a
                  href="https://wa.me/56982597210?text=Hola%2C%20Estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo.%20%C2%BFPodemos%20hablar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Contáctanos por WhatsApp
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Lanzamiento Próximo
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Eleva tu Flujo de Trabajo con Gaman
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                La plataforma todo-en-uno que ayuda a los equipos a colaborar,
                automatizar y entregar resultados excepcionales. Optimiza tus
                procesos y enfócate en lo que realmente importa con nuestras
                soluciones personalizadas de desarrollo web e IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/56982597210?text=Hola%2C%20Estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo.%20%C2%BFPodemos%20hablar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Contáctanos por WhatsApp
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Respuesta rápida por WhatsApp</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Asesoría gratuita inicial</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="SaaSify dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Confiado por empresas innovadoras a nivel mundial
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className={`${
                      theme === "light" ? "dark:invert brightness-0" : ""
                    } h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 `}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Características
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Todo lo que Necesitas para Tener Éxito
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Nuestra plataforma integral ofrece todas las herramientas
                necesarias para optimizar tus flujos de trabajo, aumentar la
                productividad y alcanzar tus objetivos con soluciones
                personalizadas de desarrollo web e inteligencia artificial.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Cómo Funciona
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Proceso Sencillo, Resultados Poderosos
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Comienza en minutos y descubre la diferencia que nuestra
                plataforma puede hacer por tu negocio con soluciones de
                desarrollo web personalizadas e IA.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Contacto Rápido",
                  description:
                    "Contáctanos rápidamente a través de nuestra plataforma para obtener respuestas inmediatas sobre desarrollo web y soluciones personalizadas.",
                },
                {
                  step: "02",
                  title: "Configura tu Espacio de Trabajo",
                  description:
                    "Personaliza tu espacio de trabajo de forma fácil y económica, adaptado a las necesidades de desarrollo web de tu equipo.",
                },
                {
                  step: "03",
                  title: "Aumenta la Productividad",
                  description:
                    "Comienza a utilizar nuestras herramientas de desarrollo web para optimizar procesos y alcanzar tus objetivos de manera eficiente y rápida.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Testimonios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Apreciado por Equipos en Todo el Mundo
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                No solo confíes en nuestra palabra. Descubre lo que nuestros
                clientes dicen sobre su experiencia con nuestras soluciones de
                desarrollo web personalizadas.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Gaman ha transformado la forma en que gestionamos nuestros proyectos. Las características de automatización nos han ahorrado innumerables horas de trabajo manual.",
                  author: "Sara González",
                  role: "Gerente de Proyectos, TechCorp",
                  rating: 5,
                },
                {
                  quote:
                    "El panel de análisis nos proporciona información a la que nunca habíamos tenido acceso. Nos ha ayudado a tomar decisiones basadas en datos que han mejorado nuestro retorno de inversión.",
                  author: "Miguel Fernández",
                  role: "Director de Marketing, GrowthLabs",
                  rating: 5,
                },
                {
                  quote:
                    "El soporte al cliente es excepcional. Cada vez que hemos tenido un problema, el equipo ha respondido rápidamente y lo ha resuelto. No podríamos pedir mejor servicio.",
                  author: "Emilia Rodríguez",
                  role: "Líder de Operaciones, StartupX",
                  rating: 5,
                },
                {
                  quote:
                    "Hemos probado varias soluciones similares, pero ninguna se compara con la facilidad de uso y las funciones integrales de Gaman. Ha sido un cambio total.",
                  author: "David Kim",
                  role: "CEO, InnovateNow",
                  rating: 5,
                },
                {
                  quote:
                    "Las herramientas de colaboración han hecho el trabajo remoto mucho más fácil para nuestro equipo. Somos más productivos que nunca, a pesar de estar en diferentes zonas horarias.",
                  author: "Lisa Patel",
                  role: "Directora de RRHH, RemoteFirst",
                  rating: 5,
                },
                {
                  quote:
                    "La implementación fue perfecta y el retorno de inversión fue casi inmediato. Hemos reducido nuestros costos operativos en un 30% desde que cambiamos a Gaman.",
                  author: "Jaime Wilson",
                  role: "COO, ScaleUp Inc",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className="size-4 text-yellow-500 fill-yellow-500"
                            />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="portfolio"
          className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Portafolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Portafolio de Proyectos
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Descubre algunos de los proyectos más destacados que hemos
                desarrollado para nuestros clientes.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="web-systems" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger
                      value="web-systems"
                      className="rounded-full px-6"
                    >
                      Sistemas Web
                    </TabsTrigger>
                    <TabsTrigger
                      value="landing-pages"
                      className="rounded-full px-6"
                    >
                      Landing Pages
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="web-systems">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Sistema de Gestión Empresarial",
                        description:
                          "Desarrollamos un sistema completo para la gestión de empresas con funcionalidades avanzadas y personalizadas.",
                        image: "path_to_image_1.jpg",
                      },
                      {
                        name: "Portal Web para E-commerce",
                        description:
                          "Creación de una plataforma de comercio electrónico con integraciones de pago y gestión de productos.",
                        image: "path_to_image_2.jpg",
                      },
                      {
                        name: "Sistema de Reservas Online",
                        description:
                          "Desarrollo de un sistema online para reservas con integración a calendarios y gestión de clientes.",
                        image: "path_to_image_3.jpg",
                      },
                    ].map((project, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                          <CardContent className="p-6">
                            <h3 className="text-2xl font-bold">
                              {project.name}
                            </h3>
                            <p className="text-muted-foreground mt-2">
                              {project.description}
                            </p>
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full mt-4"
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="landing-pages">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Landing Page para Producto",
                        description:
                          "Diseño y desarrollo de una landing page optimizada para conversiones de un producto específico.",
                        image: "path_to_image_4.jpg",
                      },
                      {
                        name: "Landing Page para Evento",
                        description:
                          "Creación de una página de aterrizaje para promover un evento con integración de formularios de inscripción.",
                        image: "path_to_image_5.jpg",
                      },
                      {
                        name: "Landing Page para Captación de Leads",
                        description:
                          "Desarrollamos una landing page enfocada en la captación de leads con diseño atractivo y llamadas a la acción claras.",
                        image: "path_to_image_6.jpg",
                      },
                    ].map((project, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                          <CardContent className="p-6">
                            <h3 className="text-2xl font-bold">
                              {project.name}
                            </h3>
                            <p className="text-muted-foreground mt-2">
                              {project.description}
                            </p>
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full mt-4"
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                PREGUNTAS FRECUENTES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Preguntas Frecuentes
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Encuentra respuestas a las preguntas comunes sobre nuestras
                soluciones de desarrollo web e inteligencia artificial.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question:
                      "¿Cuánto tiempo toma completar un proyecto de desarrollo web?",
                    answer:
                      "El tiempo de entrega depende de la complejidad y los requisitos específicos del proyecto. En general, los proyectos pueden tomar desde unas pocas semanas hasta varios meses, dependiendo de su alcance.",
                  },
                  {
                    question:
                      "¿Puedo hacer cambios durante el proceso de desarrollo?",
                    answer:
                      "Sí, durante el proceso de desarrollo se pueden realizar ajustes y modificaciones según sea necesario. Sin embargo, es importante tener en cuenta que los cambios pueden afectar el plazo de entrega y el costo final del proyecto.",
                  },
                  {
                    question:
                      "¿Ofrecen mantenimiento y soporte después de completar el proyecto?",
                    answer:
                      "Sí, ofrecemos planes de mantenimiento y soporte continuos para garantizar que tu sitio web funcione correctamente a lo largo del tiempo, con actualizaciones y correcciones cuando sea necesario.",
                  },
                  {
                    question: "¿Qué tecnologías usan para el desarrollo web?",
                    answer:
                      "Utilizamos tecnologías modernas y escalables como React, Next.js, Node.js, y soluciones de backend personalizadas, adaptándonos a las necesidades específicas de cada cliente para garantizar un rendimiento óptimo.",
                  },
                  {
                    question:
                      "¿Puedo tener acceso al código fuente de mi proyecto?",
                    answer:
                      "Sí, todos nuestros clientes tienen acceso completo al código fuente de su proyecto una vez que se haya completado. Creemos en la transparencia y en brindar a nuestros clientes el control total sobre sus productos digitales.",
                  },
                  {
                    question:
                      "¿Qué sucede si tengo un problema después de que el proyecto esté terminado?",
                    answer:
                      "Nuestro equipo de soporte está disponible para ayudarte con cualquier problema que puedas enfrentar después de completar el proyecto. Ofrecemos soporte post-lanzamiento para resolver problemas técnicos o para realizar mejoras adicionales.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${i}`}
                      className="border-b border-border/40 py-2"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                ¿Listo para Implementar Tecnología en tu Negocio?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Únete a miles de clientes satisfechos que han transformado sus
                negocios mediante la implementación de soluciones tecnológicas
                avanzadas y han mejorado su productividad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="https://wa.me/56982597210?text=Hola%2C%20Estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo.%20%C2%BFPodemos%20hablar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Contáctanos por WhatsApp
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </a>

                {/* <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </Button> */}
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <Image src="/logoIcon.png" alt="" width={45} height={45} />
                <Image
                  src="/namewhite.png"
                  alt=""
                  width={70}
                  height={40}
                  className={
                    theme === "light" ? "dark:invert brightness-0" : ""
                  }
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Optimiza tus procesos de negocio con nuestras soluciones
                tecnológicas integrales. Aumenta la productividad y haz crecer
                tu empresa con la mejor tecnología.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            {/* <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Gaman. Todos los derechos
              reservados.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
