import {
  Globe, Code2, Smartphone, PenTool, Megaphone, BrainCircuit, Cloud, ShieldCheck, Compass, Boxes,
  ShoppingCart, Workflow, HeartPulse, KanbanSquare, Receipt, Pill, Store, Building2, Rocket, Landmark,
  Briefcase, Database, Layers, Lock, type LucideIcon, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/types";

const icons: Record<IconName, LucideIcon> = {
  Globe, Code2, Smartphone, PenTool, Megaphone, BrainCircuit, Cloud, ShieldCheck, Compass, Boxes,
  ShoppingCart, Workflow, HeartPulse, KanbanSquare, Receipt, Pill, Store, Building2, Rocket, Landmark,
  Briefcase, Database, Layers, Lock,
};

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" {...props} />;
}
