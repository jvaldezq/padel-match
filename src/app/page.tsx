import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { FeatureClubs } from '@/app/modules/featureClubs';
import { FeaturePlayerRequest } from '@/app/modules/featurePlayerRequest';
import { FeatureTournaments } from '@/app/modules/featureTournaments';
import { Hero } from '@/app/modules/hero';

const Home = async () => {
  return (
    <main className="max-w-screen-lg mx-auto p-4 mb-28">
      <Hero />
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-jet text-xl">Clubs Destacados</h1>
        <Link
          href="/club/list"
          className="text-sm font-light text-jet flex items-center gap-1"
        >
          <span>Ver todos</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <FeatureClubs />

      <div className="flex justify-between items-center mb-4 mt-10">
        <h1 className="font-semibold text-jet text-xl">Se Buscan Jugadores</h1>
        <Link
          href="/players/request"
          className="text-sm font-light text-jet flex items-center gap-1"
        >
          <span>Ver todos</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <FeaturePlayerRequest />

      <div className="flex justify-between items-center mb-4 mt-10">
        <h1 className="font-semibold text-jet text-xl">Próximos Pozos</h1>
        <Link
          href="/tournament/list"
          className="text-sm font-light text-jet flex items-center gap-1"
        >
          <span>Ver todos</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <FeatureTournaments />
    </main>
  );
};

export default Home;
