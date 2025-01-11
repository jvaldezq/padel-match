import { TournamentCard } from '@/app/modules/tournamentCard';
import { Club, PlayerRequest, Tournament } from '@/lib/definitions';

const mockData = [
  {
    id: 1,
    playersNeeded: 1,
    level: 'B',
    club: 'Padel Club Downtown',
    location: 'Downtown Area',
    state: 'San José',
    city: 'Curridabat',
    category: 'Masculino',
    price: 15,
    date: '2025-01-10T22:08:39.183Z',
    startTime: '18:30',
    endTime: '20:30',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
  {
    id: 2,
    playersNeeded: 2,
    level: 'A',
    club: 'Elite Padel Center',
    location: 'West District',
    state: 'San José',
    city: 'Curridabat',
    category: 'Mixto',
    price: 20,
    date: '2025-01-11T22:08:39.183Z',
    startTime: '19:00',
    endTime: '20:00',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
  {
    id: 3,
    playersNeeded: 1,
    level: 'C',
    club: 'Padel Sports Hub',
    location: 'North Area',
    state: 'San José',
    city: 'Curridabat',
    category: 'Femenino',
    price: 12,
    date: '2025-01-11T22:08:39.183Z',
    startTime: '17:00',
    endTime: '19:00',
    image:
      'https://www.italgreen.org/computedimage/campi-da-padel.i8730-k6noro-w600-l1.jpg',
  },
] as Tournament[];

export const FeatureTournaments = async () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((request) => (
        <TournamentCard key={request.id} {...request} />
      ))}
    </section>
  );
};
