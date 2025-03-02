"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-primary text-secondary text-7xl font-bold mb-3 text-center">
          SOBRE
        </h2>
        <Image
          src="/img/rectangle.svg"
          alt="Retangulo Titulo"
          height={12}
          width={193}
          className="mx-auto"
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="font-secondary text-white text-center">
            We are a passionate team dedicated to delivering excellence in every
            project. Our mission is to help businesses grow through innovative
            digital solutions, aqui a pagina.
          </p>
        </div>
      </div>
    </section>
  );
}
