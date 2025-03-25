import { Logo } from '@/types';

const logos: Logo[] = [
  { id: 1, name: 'ACME Inc' },
  { id: 2, name: 'TechGiant' },
  { id: 3, name: 'Innovatech' },
  { id: 4, name: 'FutureWorks' },
  { id: 5, name: 'ZenithCorp' },
  { id: 6, name: 'NexusGroup' }
];

export default function LogoSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium mb-8">Trusted by innovative companies worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <div className="text-gray-400 font-bold text-xl">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
