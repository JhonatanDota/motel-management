type MenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function Menu(props: MenuProps) {
  const { open, setOpen } = props;

  return (
    <div
      className={`${
        open ? "w-20" : "w-14"
      } flex flex-col items-center bg-[#111827] h-screen sticky top-0 px-4 py-12 transition-all duration-150`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-2 right-0 bg-red-500"
      >
        me
      </button>
      <h1 className="text-white">Teste</h1>
    </div>
  );
}
