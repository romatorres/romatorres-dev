"use client";

import { useState } from "react";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Serviços</h1>
        {!isCreating && (
          <Button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Serviços
          </Button>
        )}
      </div>

      {isCreating ? (
        <ServiceForm
          onSubmit={() => setIsCreating(false)}
          onCancel={() => setIsCreating(false)}
        />
      ) : (
        <ServiceList />
      )}
    </div>
  );
}
