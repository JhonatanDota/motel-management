import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type PaginationProps = {
  setCurrentPage: (page: number) => void;
  previousPage?: number;
  nextPage?: number;
};

export default function Pagination(props: PaginationProps) {
  const { setCurrentPage, previousPage, nextPage } = props;

  function handleChangePage(page: number) {
    setCurrentPage(page);
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
