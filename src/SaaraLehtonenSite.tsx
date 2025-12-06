import React from 'react';
import { HomePage } from './pages/HomePage';

/**
 * Main site component for Saara Lehtonen
 *
 * This is the entry point for the site.
 * Currently showing HomePage only - will add routing later for other pages.
 */

export const SaaraLehtonenSite: React.FC = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default SaaraLehtonenSite;
