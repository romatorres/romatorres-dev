"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Project } from "../types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ProjectFormProps = {
  project?: Project;
  onSubmit?: () => void;
  onCancel?: () => void;
};

export default function ProjectForm({
  project,
  onSubmit,
  onCancel,
}: ProjectFormProps) {
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [imageUrl, setImageUrl] = useState(project?.imageUrl || "");
  const [link, setLink] = useState(project?.link || "");
  const [order, setOrder] = useState(project?.order || 0);

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setLink(project.link || "");
      setOrder(project.order);
    }
  }, [project]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const url = project ? `/api/projects/${project.id}` : "/api/projects";
      const method = project ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          link,
          order,
          isActive: true, // Add this as it's required by the schema
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(
          project
            ? "Projeto atualizado com sucesso!"
            : "Projeto criado com sucesso!"
        );
        setTitle("");
        setDescription("");
        setImageUrl("");
        setLink("");
        setOrder(0);
        onSubmit?.();
      } else {
        const errorMessage =
          data.error?.message ||
          data.error ||
          "Algo deu errado. Por favor, tente novamente.";
        toast.error(errorMessage);
      }
    } catch (err) {
      const error = err as Error;
      toast.error(
        error.message || "Ocorreu um erro. Por favor, tente novamente."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagem URL
          </label>
          <Input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Local path or external URL"
          />
          {imageUrl && (
            <div className="mt-2">
              <div className="relative w-32 h-32 overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src={imageUrl}
                  alt="Service preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 128px) 100vw, 128px"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Url do Projeto
          </label>
          <Input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ordem
          </label>
          <Input
            type="number"
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="flex-1">
            {project ? "Atualizar Projeto" : "Adicionar Projeto"}
          </Button>

          {onCancel && (
            <Button
              type="button"
              onClick={onCancel}
              className="flex-1"
              variant="secondary"
            >
              Cancelar
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
