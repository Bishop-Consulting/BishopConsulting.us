'use client';

import { useEffect } from 'react';

export default function MobileMenuClose() {
  useEffect(() => {
    const closeOpenMenus = (event: MouseEvent | TouchEvent) => {
      const target = event.target;

      if (!(target instanceof Element) || target.closest('.mobile-menu-details')) {
        return;
      }

      document.querySelectorAll<HTMLDetailsElement>('.mobile-menu-details[open]').forEach((menu) => {
        menu.open = false;
      });
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      document.querySelectorAll<HTMLDetailsElement>('.mobile-menu-details[open]').forEach((menu) => {
        menu.open = false;
      });
    };

    document.addEventListener('mousedown', closeOpenMenus);
    document.addEventListener('touchstart', closeOpenMenus);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
      document.removeEventListener('touchstart', closeOpenMenus);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return null;
}
