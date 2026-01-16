"use client";

import React from "react";
import { Preview } from "@/components/funtional/Preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const imageMap: Record<string, { oldVersion: string; newVersion: string }> = {
  "inversiones-jebt": {
    oldVersion: "/proyects/inversiones-jebt/desktop.png",
    newVersion: "/proyects/inversiones-jebt/desktop.png",
  },
  knokit: {
    oldVersion: "/proyects/knokit/desktop.png",
    newVersion: "/proyects/knokit/desktop.png",
  },
  "secuoya-gestion-inmobiliaria": {
    oldVersion: "/proyects/secuoya-gestion-inmobiliaria/oldDesktop.png",
    newVersion: "/proyects/secuoya-gestion-inmobiliaria/newDesktop.png",
  },
};

const getBusinessInfo = (slug: string) => {
  const businessNames: Record<string, string> = {
    "inversiones-jebt": "INVERSIONES JEBT",
    knokit: "Knokit",
    "secuoya-gestion-inmobiliaria": "Secuoya Gestión Inmobiliaria",
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
      title: "Sus clientes buscan su negocio desde el celular",
      description:
        "Más del 70% de las búsquedas se hacen desde el móvil. Sin una web optimizada, está perdiendo clientes.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: AlertCircle,
      title: "Una web antigua o inexistente pierde confianza",
      description:
        "Los clientes dudan de negocios sin presencia digital profesional. Una página moderna genera confianza.",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Sin web, no hay captación automática de clientes",
      description:
        "Su negocio está perdiendo oportunidades 24/7. Con esta página, captará clientes incluso mientras duerme.",
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
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary text-white">
                Demo para {businessName}
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text px-4
          text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
            >
              Así podría verse la página web de su negocio hoy
            </h1>
            <p className="text-[16px] md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Diseñada para verse bien en celular y captar clientes desde Google
              y WhatsApp
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
                Actívala esta semana
              </Button>
            </a>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="relative w-full py-8 md:py-12">
          <Preview
            oldVersion={images.oldVersion}
            newVersion={images.newVersion}
          />
        </section>
      </motion.div>

      <section className="w-full py-16 md:py-20 bg-muted/30 relative">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Por qué necesita esta página
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {problemCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={`problem-card-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card
                    className={`overflow-hidden border-0 bg-gradient-to-br ${card.gradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background/80 ${card.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="size-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <section className="w-full py-16 md:py-20 bg-muted/30 relative">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Inversión
              </h2>

              <p className="text-muted-foreground text-lg">
                Precio referencial según requerimientos del negocio.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Precio */}
              <div className="text-center mb-10">
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    $99.999
                  </span>
                  <span className="text-xl md:text-2xl text-muted-foreground ml-2">
                    CLP
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">
                  Precio referencial según requerimientos del negocio.
                </p>
              </div>

              {/* Lista de características */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Diseño profesional enfocado en conversión
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Adaptada 100% a celular y tablets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Botón WhatsApp con contacto directo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Formulario de contacto funcional
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Dominio y hosting configurados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Publicación y puesta en marcha
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Plazo estimado: 5 a 7 días hábiles
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground">
                    Soporte inicial incluido
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
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              ¿La dejamos publicada?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Esta página puede estar captando clientes para su negocio en menos
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
                Quiero esta página
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
              Contacto directo por WhatsApp • Respuesta rápida
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default PagePreview;
