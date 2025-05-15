
import { toast as sonnerToast } from "sonner";
import { useToast as useToastShadcn, type ToastOptions, type ToastActionElement } from "@/components/ui/toast";

// Reexport the toast function from sonner
export const toast = sonnerToast;

// Reexport the useToast hook from shadcn/ui
export const useToast = useToastShadcn;

// Reexport types
export type { ToastOptions, ToastActionElement };
