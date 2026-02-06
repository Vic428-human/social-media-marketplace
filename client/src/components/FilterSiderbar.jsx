import React from "react";

const FilterSiderbar = ({ showFilter, setShowFilter, filters, setFilters }) => {
  return (
    // h-fit类用于使元素的高度适应其内容，但不会超过其父容器的高度
    <div className="max-sm:inset-0 z-100 max-sm:h-screen max-sm:overflow-scroll bg-white rounded-lg shadow-sm border border-gray-200 h-fit sticky top-24 md:min-w-[300px]">
      FilterSiderbar
    </div>
  );
};

export default FilterSiderbar;
