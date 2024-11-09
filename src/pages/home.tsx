import { SadaqaCard } from "@/components/sadaqa-card";
import { SadaqaDialog } from "@/components/sadaqa-dialog/sadaqa-dialog";
import { mockSadaqaCases, SadaqaCase } from "@/mock/mock-sadaqa";
import { useState } from "react";

export function Home() {
  const [helpModal, setHelpModal] = useState<{
    isOpen: boolean;
    info: SadaqaCase;
  } | null>(null);

  return (
    <>
      {helpModal && (
        <SadaqaDialog
          info={{
            title: helpModal.info.title,
            description: helpModal.info.description,
            credentials: helpModal.info.credentials,
          }}
          open={helpModal.isOpen}
          onOpenChange={(open) =>
            setHelpModal((prev) => (prev ? { ...prev, isOpen: open } : null))
          }
        />
      )}
      <div className="flex flex-wrap gap-4 p-4">
        {mockSadaqaCases.map((sadaqa) => (
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]">
            <SadaqaCard
              key={sadaqa.id}
              info={sadaqa}
              onHelp={(info) => setHelpModal({ isOpen: true, info })}
            />
          </div>
        ))}
      </div>
    </>
  );
}
