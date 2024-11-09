export function InProgressPage() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343)",
      }}
    >
      <div className="flex h-full flex-col items-center justify-end pb-10">
        <p className="text-3xl text-white">Loading...</p>
      </div>
    </div>
  );
}
