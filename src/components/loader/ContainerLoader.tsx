"use client";

import { PropsWithChildren } from "react";
import { Spinner } from "../ui/spinner";

/**
 * Loader simples centralizado que toma todo o height de seu parent
 */
export function ContainerLoader({ children }: PropsWithChildren) {
  return (
    <div className="bg-slate-50 h-full flex flex-col space-y-4 items-center justify-center">
      {children}
      <Spinner size="16" color="blue" />
    </div>
  );
}
