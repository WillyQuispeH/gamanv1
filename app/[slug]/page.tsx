"use client";

import React from "react";
import { Preview } from "@/components/funtional/Preview";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Smartphone,
  AlertCircle,
  TrendingUp,
  Zap,
  Globe,
  MessageCircle,
  Clock,
  Check,
  X,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const imageMap: Record<string, { oldVersion: string; newVersion: string }> = {
  "secuoya-gestion-inmobiliaria": {
    oldVersion: "/proyects/secuoya-gestion-inmobiliaria/oldDesktop.png",
    newVersion: "/proyects/secuoya-gestion-inmobiliaria/newDesktop.png",
  },
  "oettinger-corretajes": {
    oldVersion: "/proyects/oettinger-corretajes/oldDesktop.png",
    newVersion: "/proyects/oettinger-corretajes/newDesktop.png",
  },
};

const getBusinessInfo = (slug: string) => {
  const businessNames: Record<string, string> = {
    "secuoya-gestion-inmobiliaria": "Secuoya Gestión Inmobiliaria",
    "oettinger-corretajes": "Oettinger Corretajes",
  };
  return businessNames[slug] || slug.replace(/-/g, " ").toUpperCase();
};

const PagePreview = ({ params }: PageProps) => {
  const { slug } = React.use(params);
  const images = imageMap[slug];
  const businessName = getBusinessInfo(slug);

  if (!images) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg text-muted-foreground">
            Preview no encontrado para: {slug}
          </p>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hola, vi la demo de mi página web (${businessName}) y quiero activarla. ¿Cuándo podemos dejarla publicada?`;
  const whatsappUrl = `https://wa.me/56982597210?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const problemCards = [
    {
      icon: Smartphone,
      title: "Clientes que se van sin escribir",
      description:
        "Cada día, personas buscan tu negocio desde el celular. Si tu web no es clara en 3 segundos, cierran y contactan a tu competencia.",
      gradient: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-500",
    },
    {
      icon: AlertCircle,
      title: "Confianza que se pierde en segundos",
      description:
        "Una página difícil de navegar o desactualizada transmite descuido. Los clientes dudan y prefieren no arriesgarse contigo.",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Visitas que no se convierten desde el celular",
      description:
        "Tienes tráfico, pero no contactos. Cada visita perdida es dinero que dejaste ir. Una página optimizada cambia eso.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
  ];

  const includesItems = [
    { icon: Globe, text: "Landing profesional" },
    { icon: Smartphone, text: "Adaptada a celular" },
    { icon: MessageCircle, text: "Botón WhatsApp" },
    { icon: Zap, text: "Formulario de contacto" },
    { icon: Globe, text: "Dominio + hosting" },
    { icon: Clock, text: "Entrega rápida" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
          <div className="absolute inset-0 -z-10 h-full w-full
             bg-[linear-gradient(to_right,#d5d5d5_1px,transparent_1px),linear-gradient(to_bottom,#d5d5d5_1px,transparent_1px)]
              bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary text-blue-500">
                Vista previa para {businessName}
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text px-4
          text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
            >
              Una web pensada para que te contacten
            </h1>
            <p className="text-[16px] md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Te mostramos cómo podría verse tu página optimizada para generar más contactos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-[16px] md:text-[18px] shadow-lg hover:shadow-xl
               transition-all duration-300 hover:scale-105 text-white font-bold"
              >
                Hablemos por WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </motion.div>


      <section className="w-full py-8 md:py-12 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <Preview
          oldVersion={images.oldVersion}
          newVersion={images.newVersion}
        />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 max-w-5xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Cómo funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Paso 1 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Revisamos tu situación actual</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analizamos tu web actual (o ausencia de ella) y entendemos qué necesitas.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Te mostramos la demo personalizada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ves exactamente cómo quedará tu página antes de publicar nada.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Se publica y empieza a captar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  En menos de una semana, tu negocio tiene presencia profesional y funcional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-16 md:py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 max-w-4xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Inversión
              </h2>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Ancla psicológica */}
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-2">
                  Una página como esta normalmente cuesta entre
                </p>
                <p className="text-2xl md:text-3xl font-bold text-muted-foreground/70 line-through">
                  $300.000 - $600.000 CLP
                </p>
              </div>

              {/* Precio real */}
              <div className="text-center mb-10 py-6 bg-primary/5 rounded-xl border-2 border-primary/20">
                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
                  Precio de lanzamiento
                </p>
                <div className="mb-2">
                  <span className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    $99.999
                  </span>
                  <span className="text-2xl md:text-3xl text-muted-foreground ml-2">
                    CLP
                  </span>
                </div>
                <p className="text-muted-foreground text-base">
                  Precio referencial según requerimientos del negocio
                </p>
              </div>

              {/* Lista simplificada */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    Diseño enfocado en conversión
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    100% adaptada a celular
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    Botón WhatsApp directo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    Formulario de contacto
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    Dominio propio y alojamiento
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">
                    Publicación en 5-7 días
                  </span>
                </div>
              </div>

              {/* Mensajes destacados */}
              <div className="pt-8 border-t border-border space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👉</span>
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    Sin pagos mensuales ocultos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👉</span>
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    No es plantilla genérica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-16 md:py-20 bg-muted/20 relative">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            {/* Prueba social */}
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Usado por negocios locales en Santiago y regiones
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonio 1 - Clínicas */}
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <p className="text-base md:text-lg text-foreground italic mb-4">
                  "Nuestros pacientes ahora agendan citas directamente desde la web. Ya no perdemos llamadas."
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Clínica Dental
                </p>
              </div>

              {/* Testimonio 2 - Corretajes */}
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <p className="text-base md:text-lg text-foreground italic mb-4">
                  "Ahora nos contactan directo desde el celular. Antes perdíamos consultas porque no encontraban cómo escribirnos."
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Corretaje de Propiedades
                </p>
              </div>

              {/* Testimonio 3 - Turismo */}
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <p className="text-base md:text-lg text-foreground italic mb-4">
                  "Los turistas ven las fotos y reservan al instante por WhatsApp. Aumentamos las reservas un 40%."
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Cabañas y Turismo
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              ¿La activamos esta semana?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Esta página puede estar captando clientes para tu negocio en menos
              de una semana.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="rounded-full font-bold text-white h-16 px-12 text-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
              >
                Activar esta versión
              </Button>
            </a>
            <div className="mt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                No se publica nada sin tu aprobación
              </p>
              <p className="text-xs text-muted-foreground/70">
                Contacto directo por WhatsApp • Sin compromiso • Respuesta rápida
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default PagePreview;
