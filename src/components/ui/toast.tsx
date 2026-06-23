"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className)}
      {...props}
    />
  )
);
ToastViewport.displayName = "ToastViewport";

type ToastProps = { id?: string; title?: React.ReactNode; description?: React.ReactNode; variant?: "default" | "destructive"; open?: boolean; onOpenChange?: (open: boolean) => void; className?: string };
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({ className, variant, children, ...props }, ref) => {
  const variantClasses = variant === "destructive" ? "border-destructive bg-destructive text-destructive-foreground" : "border-border bg-card text-card-foreground";
  return <div ref={ref} className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 shadow-lg transition-all", variantClasses, className)} {...props}>{children}</div>;
});
Toast.displayName = "Toast";

const ToastTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm font-semibold [&+div]:text-xs", className)} {...props} />
);
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
);
ToastDescription.displayName = "ToastDescription";

const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100", className)} toast-close="" {...props}>
      ✕
    </button>
  )
);
ToastClose.displayName = "ToastClose";

const ToastAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50", className)} {...props} />
  )
);
ToastAction.displayName = "ToastAction";

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction };
type ToastPropsType = ToastProps;
