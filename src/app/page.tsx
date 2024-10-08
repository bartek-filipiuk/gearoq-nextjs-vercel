import dynamic from 'next/dynamic'

const Gearoq = dynamic(() => import('@/components/gearoq'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Gearoq />
    </div>
  );
}
