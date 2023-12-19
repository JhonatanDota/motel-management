import { useEffect, useState } from "react";
import { Links } from "../../models/RequestModel";

type PaginationProps = {
  requestFunc: (url?: string | undefined) => Promise<Links | undefined>;
};

export default function Pagination(props: PaginationProps) {
  const { requestFunc } = props;
  const [nextPage, setNextPage] = useState<string | undefined>();
  const [previousPage, setPreviousPage] = useState<string | undefined>();

  useEffect(() => {
    handleChangePage();
  }, []);

  async function handleChangePage(url?: string) {
    const links: Links | undefined = await requestFunc(url);

    setPreviousPage(links?.prev ?? undefined);
    setNextPage(links?.next ?? undefined);
  }

  return (
    <div className="flex justify-around w-full">
      <button
        onClick={() => handleChangePage(previousPage)}
        disabled={!Boolean(previousPage)}
        className="p-2 bg-green-500"
      >
        ANTERIOR
      </button>

      <button
        onClick={() => handleChangePage(nextPage)}
        disabled={!Boolean(nextPage)}
        className="p-2 bg-green-500"
      >
        PROXIMA
      </button>
    </div>
  );
}
