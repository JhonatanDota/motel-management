export default function EditContainerSkeleton() {
  const skeletonQtn: number = 5;

  return (
    <>
      {Array.from({ length: skeletonQtn }, (_, index) => (
        <div
          key={index}
          className="w-full bg-[#111827]/80 h-14 md:h-24 animate-pulse"
        ></div>
      ))}
    </>
  );
}
