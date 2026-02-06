import React from "react";
import {ArrowLeftIcon} from 'lucide-react'

const Marketplace = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center justify-between text-slate-500">
        <button>
          <ArrowLeftIcon />
                     回上一頁</button>
        <button>篩選器</button>
      </div>

      <div></div>
    </div>
  );
};

export default Marketplace;
