import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SadaqaDialog } from "@/components/sadaqa-dialog/sadaqa-dialog";
import { mockSadaqaCases, SadaqaCase } from "@/mock/mock-sadaqa";

export function RandomSadaqa() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<SadaqaCase | null>(null);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * mockSadaqaCases.length);
    console.log(randomIndex);
    setCurrentCase(mockSadaqaCases[randomIndex]);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleRandomClick}
        className="w-full md:w-auto bg-orange-500 text-white rounded-xl hover:bg-orange-600 px-6 py-2 text-lg font-medium  transition-transform"
      >
        Помочь рандомно
      </Button>

      {currentCase && (
        <SadaqaDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          info={{
            title: currentCase.title,
            description: currentCase.description,
            credentials: currentCase.credentials,
          }}
        />
      )}
    </>
  );
}
