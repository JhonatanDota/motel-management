import { useEffect } from "react";
import { SetURLSearchParams } from 'react-router-dom';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type PaginationProps = {
  previousPage?: number;
  nextPage?: number;
  params?: object;
  setParams: (params: object) => void;
  setSearchParams: SetURLSearchParams;
};

export default function Pagination(props: PaginationProps) {
  const { previousPage, nextPage, params, setParams, setSearchParams } = props;

  function handleChangePage(page: number) {
    setParams({ ...params, "page[number]": page });
  }

  useEffect(() => {
    setSearchParams({ ...params });
  }, [params]);

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
