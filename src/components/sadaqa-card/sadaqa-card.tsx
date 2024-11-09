import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { SadaqaCase } from "@/mock/mock-sadaqa";

interface SadaqaCardProps {
  info: SadaqaCase;
  onHelp: (info: SadaqaCase) => void;
}

export function SadaqaCard(props: SadaqaCardProps) {
  const { info, onHelp } = props;
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-1">{info.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {info.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-4">{info.content}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full rounded-xl bg-green-500 hover:bg-green-600 text-white"
          variant="default"
          onClick={() => onHelp(info)}
        >
          Помочь
        </Button>
      </CardFooter>
    </Card>
  );
}
