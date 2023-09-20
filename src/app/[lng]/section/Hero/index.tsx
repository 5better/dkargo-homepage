import Card from '@/components/Card';

function Hero() {
  return (
    <div className={'bg-gray-300 w-full h-screen max-h-[1080px] text-4xl'}>
      Hero Section(Main Section)
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Hero;
