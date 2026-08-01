export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-linear-to-br from-orange-50 to-white px-6 text-center">
      <img src="/logo.png" alt="Stuti Path" className="w-20 h-20 rounded-2xl shadow-md" />
      <h1 className="text-2xl font-bold text-orange-600">You&apos;re offline</h1>
      <p className="text-gray-600 max-w-sm">
        This page hasn&apos;t been saved for offline use yet. Reconnect to the
        internet and open it once to make it available offline next time.
      </p>
    </div>
  );
}
