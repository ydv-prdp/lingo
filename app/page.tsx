import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <div className="text-green-500 font-bold text-lg">
    <Button size={"lg"} variant={"default"}>
      Click me
    </Button>
    <Button size={"lg"} variant={"primary"}>
      Primary
    </Button>
    <Button size={"lg"} variant={"primaryOutline"}>
      Primary Oultine
    </Button>
    <Button size={"lg"} variant={"secondary"}>
      Secondary
    </Button>
    <Button size={"lg"} variant={"secondaryOutline"}>
      Secondary Outline
    </Button>
    <Button size={"lg"} variant={"danger"}>
      Danger
    </Button>
    <Button size={"lg"} variant={"dangerOutline"}>
      Danger Outline
    </Button>
    <Button size={"lg"} variant={"super"}>
      Super
    </Button>
    <Button size={"lg"} variant={"superOutline"}>
      Super Outline
    </Button>
    <Button size={"lg"} variant={"ghost"}>
      Ghost
    </Button>
    <Button size={"lg"} variant={"sidebar"}>
      Sidebar
    </Button>
    <Button size={"lg"} variant={"sidebarOutline"}>
      Sidebar Outline
    </Button>
    
  </div>
  );
}
