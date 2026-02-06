import React from "react";
import { Filter, X } from "lucide-react";

const FilterSiderbar = ({ showFilter, setShowFilter, filters, setFilters }) => {
  return (
    // h-fit类用于使元素的高度适应其内容，但不会超过其父容器的高度
    <div
      className={`${showFilter ? `max-sm:fixed` : `max-sm:hidden`} max-sm:inset-0 z-100 max-sm:h-screen max-sm:overflow-scroll bg-white rounded-lg shadow-sm border border-gray-200 h-fit sticky top-24 md:min-w-[300px]`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-2 text-gray-700">
            <Filter className="size-4" />
            <h3 className="font-semibold">篩選器</h3>
          </div>

          <div onClick={()=>setShowFilter(false)}>
            <X className="size-6 text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded cursor-pointer transition-colors cursor-pointer"/>
            <button className="sm:hidden text-sm border text-gray-700 px-3 py-1 rounded">
              執行
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FilterSiderbar;
