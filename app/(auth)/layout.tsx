export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full bg-rose-400	 border-pink-300/25">
      {children}
    </div>
  );
}
