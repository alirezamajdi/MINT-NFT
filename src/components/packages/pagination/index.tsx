"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import style from "./Style.module.css";
import clsx from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function PaginatedItems({
  limit,
  count,
  onClick,
}: {
  limit: number;
  count: number;
  onClick?: (value: number) => void;
}) {
  const router = useRouter();
  const { query, asPath, isReady } = useRouter();
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const currentPage = Number(query.page);
  const activeReactPaginate = currentPage && currentPage > 0;
  const firstReactPaginate = currentPage && currentPage < 1;
  const notPageParamsInUrl =
    isReady && !/page/.test(asPath.split("?")[asPath.split("?").length - 1]);

  useEffect(() => {
    setPageCount(Math.ceil(count / limit));
  }, [itemOffset, limit, count]);

  // Invoke when user click to request another page.
  const handlePageClick = ({
    nextSelectedPage,
  }: {
    nextSelectedPage: number;
  }) => {
    if (nextSelectedPage != undefined) {
      const newOffset = (nextSelectedPage * limit) % count;
      if (onClick) {
        onClick(nextSelectedPage + 1);
      } else {
        if (location.search) {
          let x = location.search.split("&");
          if (/page/.test(x[0])) {
            //?page=1&status=test
            let updated = x.slice(1);
            router.push(
              location.pathname +
                "?page=" +
                (nextSelectedPage + 1) +
                (updated.length > 0 ? "&" + updated.join("&") : "")
            );
          } else {
            //?status=test
            router.push(
              location.pathname +
                "?page=" +
                (nextSelectedPage + 1) +
                "&" +
                location.search.substring(1)
            );
          }
        } else {
          router.push(location.pathname + "?page=" + (nextSelectedPage + 1));
        }
      }
      setItemOffset(newOffset);
    }
  };

  useEffect(() => {
    if (isReady && currentPage < 1)
      router.push(location.pathname + "?page=" + 1);
  }, [isReady]);

  return (
    <>
      {Boolean(activeReactPaginate) && (
        <ReactPaginate
          // nextLabel={<BiChevronRight size={30} color={"#006FFD"} />}
          onClick={(e: any) => handlePageClick(e)}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          initialPage={currentPage - 1}
          previousLabel={<BiChevronLeft size={30} color={"#006FFD"} />}
        />
      )}
      {(firstReactPaginate || notPageParamsInUrl) && (
        <ReactPaginate
          // nextLabel={<BiChevronRight size={30} color={"#006FFD"} />}
          onClick={(e: any) => handlePageClick(e)}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          initialPage={0}
          previousLabel={<BiChevronLeft size={30} color={"#006FFD"} />}
        />
      )}
    </>
  );
}

const Index = ({
  onClick,
  justify = "center",
  value,
  className,
}: {
  justify?: string;
  value?: Pagination;
  onClick?: (value: number) => void;
  className?: string;
}) => {
  const [isLoad, setIsload] = useState(false);
  useEffect(() => {
    setIsload(true);
  }, []);

  return (
    <>
      {isLoad && value && value?.lastPage > 1 && (
        <div
          className={clsx(
            style.paginate,
            "paginate",
            style["justify-" + justify],
            className
          )}
        >
          <PaginatedItems
            limit={value.perPage}
            count={value.total}
            onClick={onClick}
          />
        </div>
      )}
    </>
  );
};
export default Index;
