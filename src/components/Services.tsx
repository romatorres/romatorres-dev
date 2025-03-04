"use client";

import { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Service } from "@/app/dashboard/Services/types";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const response = await fetch("/api/services");
      const data = await response.json();
      setServices(data.services || []);
    }

    fetchServices();
  }, []);

  return (
    <section id="services">
      <div className="container mx-auto px-4 md:px-12 py-0 lg:py-16">
        <div>
          <h2 className="font-primary text-secondary text-4xl md:text-5xl lg:text-7xl font-bold mb-3 text-center">
            SERVIÇOS
          </h2>
          <Image
            src="/img/rectangle.svg"
            alt="Retangulo Titulo"
            height={12}
            width={285}
            className="mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center  bg-gradient-to-t from-[#181818] to-[#121212] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 relative h-28 w-28 m-8">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    {service.icon ? (
                      <span className="text-4xl">{service.icon}</span>
                    ) : (
                      <Settings className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                )}
              </div>

              <div className="pr-8">
                <h3 className="text-secondary text-3xl font-primary uppercase font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-white font-secondary text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-4 mt-20">
          <Button className="w-full md:w-auto">CONTRATAR</Button>
          <Button variant="outline" className="w-full md:w-auto">
            MEUS TRABALHOS
          </Button>
        </div>
      </div>
    </section>
  );
}
