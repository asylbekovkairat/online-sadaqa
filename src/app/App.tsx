import { AppRouter } from "./providers/router";
import { Suspense } from "react";

export function App() {
  return (
    <Suspense fallback="d">
      <AppRouter />
    </Suspense>
  );
}
