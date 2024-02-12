"use client";
import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

const ToursPage = () => {
  const [searchVal, setSearchVal] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["tours", searchVal],
    queryFn: () => getAllTours(searchVal),
  });

  return (
    <>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Enter city or country here...."
            className="input input-bordered join-item w-full"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            required
          />
          <button
            type="buttton"
            className="btn btn-primary join-item capitalize"
            disabled={isPending}
            onClick={() => setSearchVal("")}
          >
            {isPending ? "please wait...." : "reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className=" loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default ToursPage;
