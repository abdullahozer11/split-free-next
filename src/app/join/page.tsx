'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react'; // Add Suspense

// Simple fallback loading component
function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Loading...</h1>
    </div>
  );
}

function JoinContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=xyz.splitfree&hl=fr';
    }, 2000);

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

export default function JoinPage() {
  return (
    <Suspense fallback={<Loading />}>
      <JoinContent />
    </Suspense>
  );
}

// Force dynamic rendering to avoid static prerender issues
export const dynamic = 'force-dynamic';
