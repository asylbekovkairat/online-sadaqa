import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SadaqaCredentials } from "@/mock/mock-sadaqa";
import { CopyButton } from "@/components/ui/copy-button";

interface SadaqaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  info: {
    title: string;
    description: string;
    credentials: SadaqaCredentials;
  };
}

export function SadaqaDialog(props: SadaqaDialogProps) {
  const { open, onOpenChange, info } = props;
  const [showCredentials, setShowCredentials] = useState(false);

  console.log(
    Object.entries(info.credentials).map(([key, value]) =>
      console.log(key, value)
    )
  );

  return (
    <Dialog>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-slate-100 !rounded-xl">
          <DialogHeader>
            <DialogTitle>{info.title}</DialogTitle>
            <DialogDescription>{info.description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              onClick={() => setShowCredentials(!showCredentials)}
            >
              {showCredentials ? "Скрыть реквизиты" : "Показать реквизиты"}
            </Button>

            <div
              className={`
                overflow-hidden transition-all duration-200 ease-in-out
                ${
                  showCredentials ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="bg-white p-6 pt-2 rounded-lg space-y-4 flex items-baseline justify-center gap-3">
                {Object.entries(info.credentials).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/_/g, " ")}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-base font-medium">{value}</div>
                      <CopyButton value={value.toString()} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
