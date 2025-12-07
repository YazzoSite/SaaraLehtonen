import { useState, useEffect } from 'react';

/**
 * Hook to fetch and load CMS content from JSON files
 *
 * @param contentFile - Name of the content file (e.g., 'home.json')
 * @returns The loaded content data or null if loading/error
 *
 * @example
 * const data = useContentData<HomeContent>('home.json');
 * if (!data) return <div>Loading...</div>;
 * return <div>{data.name}</div>;
 */
export function useContentData<T>(contentFile: string): T | null {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`/content/${contentFile}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${contentFile}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(setData)
      .catch(err => {
        console.error(`Error loading content file ${contentFile}:`, err);
        setError(err);
      });
  }, [contentFile]);

  if (error) {
    console.error('Content loading error:', error);
    return null;
  }

  return data;
}
