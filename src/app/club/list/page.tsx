import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { FeatureClubs } from '@/app/modules/featureClubs';
import { FeaturePlayerRequest } from '@/app/modules/featurePlayerRequest';
import { FeatureTournaments } from '@/app/modules/featureTournaments';
import { Hero } from '@/app/modules/hero';

const Clubs = async () => {
  return (
    <main className="max-w-screen-lg mx-auto p-4 mb-28">
      <FeatureClubs />
    </main>
  );
};

export default Clubs;
