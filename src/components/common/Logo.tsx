import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/LinkForgeLOGO new bg.png"
      alt="LinkForge logo"
      width={80}
      height={80}
      className="pb-4"
      priority
    />
  );
}
