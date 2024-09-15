import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button size="sm" radius="none">
        Click me
      </Button>
      <div className="m-2 text-red-600">Hello</div>
      <ThemeSwitcher />
    </div>
  );
}
