import { useEffect, useState } from "react";
import { PaginationModel } from "../../models/RequestModel";
import { useSearchParams } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type PaginationProps = {
  requestFunc: (params?: object) => Promise<PaginationModel>;
  params?: object;
};

export default function Pagination(props: PaginationProps) {
  const { requestFunc } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();

  useEffect(() => {
    handleChangePage(searchParams.get("page") ?? 1);
  }, []);

  async function handleChangePage(page: number | string) {
    const pagination: PaginationModel = await requestFunc({
      "page[number]": page,
    });
    const currentPage: number = pagination.pages.page;
    const pageTotalCount: number = pagination.pages.pages;

    setPreviousPage(currentPage > 1 ? currentPage - 1 : undefined);

    setNextPage(
      currentPage + 1 <= pageTotalCount ? currentPage + 1 : undefined
    );

    if (currentPage) setSearchParams({ page: currentPage.toString() });
  }

  return (
    <div className="flex justify-around w-full">
      <button
        onClick={() => previousPage && handleChangePage(previousPage)}
        disabled={!Boolean(previousPage)}
        className="text-5xl md:text-7xl"
      >
        <IoIosArrowDropleftCircle
          fill={`${previousPage ? "green" : "#B8B8B8"}`}
        />
      </button>

      <button
        onClick={() => nextPage && handleChangePage(nextPage)}
        disabled={!Boolean(nextPage)}
        className="text-5xl md:text-7xl"
      >
        <IoIosArrowDroprightCircle fill={`${nextPage ? "green" : "#B8B8B8"}`} />
      </button>
    </div>
  );
}