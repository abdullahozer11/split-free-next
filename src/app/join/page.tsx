'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function JoinPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    // Optional: Brief delay to allow app to open if installed (OS handles primarily)
    const timer = setTimeout(() => {
      // Redirect to Play Store (Android-focused)
      window.location.href = 'https://play.google.com/store/apps/details?id=xyz.splitfree&hl=fr';
    }, 2000); // 2 seconds for app to potentially open

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Opening Split Free...</h1>
      <p>If the app doesn&apos;t open, you&apos;ll be redirected to the Google Play Store.</p>
      {token && <p>Invite token: {token} (for reference)</p>}
    </div>
  );
}
