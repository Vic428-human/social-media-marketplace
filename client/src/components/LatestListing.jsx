import React from "react";
// Use Redux State and Actions in React Componentss
import { useSelector } from "react-redux";
import Title from "./Title";
import ListingCard from "./ListingCard";

const LatestListing = () => {
  // state.listing.listings => state.[slice name].[initialState]
  const { listings } = useSelector((state) => state.listing);
  return (
    <div className="mt-20 mb-8">
      <Title
        title="熱門商品"
        desciption="最炙手可熱的商品上架囉，快來看看吧~"
      />
      <div className="flex flex-col gap-6 p">
        {listings.slice(0, 4).map((listing, index) => (
          <div key={index}>
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestListing;
