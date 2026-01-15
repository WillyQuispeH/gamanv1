"use client";

import React from "react";
import { Preview } from "@/components/funtional/Preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  X,
  ArrowRight,
  Smartphone,
  AlertCircle,
  TrendingUp,
  Zap,
  Globe,
  MessageCircle,
  Clock,
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
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">
              Demo para {businessName}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text 
          text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
          >
            Así podría verse la página web de su negocio hoy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Diseñada para verse bien en celular y captar clientes desde Google y
            WhatsApp
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white font-bold"
            >
              ¿La activamos esta semana?
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </a>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <Preview
          oldVersion={images.oldVersion}
          newVersion={images.newVersion}
        />
      </section>

      <section className="w-full py-16 md:py-20 bg-muted/30 relative">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por qué necesita esta página
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {problemCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-semibold text-primary">
                Todo lo necesario
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70">
              Qué incluye
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una solución completa lista para captar clientes desde el primer
              día
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {includesItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="group relative border-0 bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 relative z-10 flex flex-col items-center text-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 text-primary group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 group-hover:border-primary/40 shadow-lg group-hover:shadow-primary/20">
                        <Icon className="size-7" />
                      </div>
                    </div>
                    <span className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {item.text}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <CardContent className="pt-16 pb-16 px-8 md:px-12 text-center relative z-10">
          <div className="relative inline-block mb-8">
           <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/40 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Check className="size-10 text-primary drop-shadow-lg" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-white transition-all duration-500">
            Si no le gusta, no paga
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 group-hover:text-foreground/90 transition-colors duration-300">
            Garantía de satisfacción total. Solo paga si está completamente
            conforme con el resultado final.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary/50 to-primary/50"></div>
          </div>
        </CardContent>
      </section>

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
              <ArrowRight className="ml-3 font-bold size-6" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <MessageCircle className="size-4" />
            Contacto directo por WhatsApp • Respuesta rápida
          </p>
        </div>
      </section>
    </div>
  );
};

export default PagePreview;
