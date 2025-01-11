'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navigationItems = [
  {
    href: '/',
    icon: Home,
    label: 'Home',
  },
  // {
  //   href: '/credit',
  //   icon: CreditIcon,
  //   label: 'Créditos',
  // },
  // {
  //   href: '/income',
  //   icon: IncomeIcon,
  //   label: 'Ingresos',
  // },
  // {
  //   href: '/profile',
  //   icon: ProfileIcon,
  //   label: 'Perfil',
  // },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'fixed',
        'w-full',
        'py-4',
        'bottom-0 border border-t border-solid border-primary/[0.1]',
        'bg-white',
      )}
    >
      <div className="flex gap-2 w-full justify-between px-4">
        {navigationItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex',
              'flex-col',
              'justify-center',
              'items-center',
              'gap-1.5',
            )}
          >
            <Icon
              className={cn(
                pathname.includes(href) ? undefined : 'opacity-25',
                'text-jet',
              )}
            />
            <span
              className={cn(
                'text-xs',
                'text-jet',
                'font-medium',
                pathname.includes(href) ? undefined : 'opacity-80',
              )}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
