import { Button } from '@nextui-org/react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button size='sm' radius='none'>Click me</Button>
      <ThemeSwitcher/>
    </div>
  );
}
