export default function EditContainerSkeleton() {
  const skeletonQtn: number = 5;

  return (
    <>
      {Array.from({ length: skeletonQtn }, (_, index) => (
        <div
          key={index}
          className="w-full bg-[#111827]/20 h-14 animate-pulse"
        ></div>
      ))}
    </>
  );
}
