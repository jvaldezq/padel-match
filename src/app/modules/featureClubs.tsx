import { ClubCard } from '@/app/modules/clubCard';
import { Club } from '@/lib/definitions';

const mockData = [
  {
    id: 1,
    name: 'Padel Club 1',
    courts: 3,
    price: 25,
    location: 'Downtown Area 1',
    state: 'San José',
    city: 'Curridabat',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
  {
    id: 2,
    name: 'Padel Club 2',
    courts: 3,
    price: 25,
    location: 'Downtown Area 2',
    state: 'San José',
    city: 'Escazu',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
  {
    id: 3,
    name: 'Padel Club 3',
    courts: 2,
    price: 20,
    location: 'Downtown Area 3',
    state: 'Heredia',
    city: 'Belén',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
] as Club[];

export const FeatureClubs = async () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((club) => (
        <ClubCard key={club.id} {...club} />
      ))}
    </section>
  );
};
