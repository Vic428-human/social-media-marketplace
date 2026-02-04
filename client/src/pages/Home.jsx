import React, { useState } from "react";
import Hero from "../components/Hero";
import LatestListing from "../components/LatestListing";
import Slider from "../components/Slider";
import InfiniteScrollAnimationPage from "../components/InfiniteScrollAnimationPage";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const stocksData = [
  { id: 1, territory: "維爾茨堡", guild: "土匪" },
  { id: 2, territory: "夏洛滕堡", guild: "不想說·__·" },
  { id: 3, territory: "紅樓", guild: "鼎旺乾坤－瞬殺無痕" },
  { id: 4, territory: "紐倫堡", guild: "嶽夜森林" },
  { id: 5, territory: "權德", guild: "?" },
  { id: 6, territory: "尤布利格", guild: "不想說·__·" },
  { id: 7, territory: "米榭思德茲", guild: "凌雲閣" },
  { id: 8, territory: "克林喜德", guild: "今夜不准睡" },
  { id: 9, territory: "明淨", guild: "血染的風采" },
  { id: 10, territory: "天壇", guild: "?" },
  { id: 11, territory: "佛影", guild: "鼎旺乾坤－瞬殺無痕" },
  { id: 12, territory: "竹林唄", guild: "?" },
];

// Example list of items
const items = [
  "🚀 Fast animations",
  "🎨 TailwindCSS styling",
  "⚡ Framer Motion smoothness",
  "♾ Infinite loop",
  "📱 Responsive design",
];

const Home = () => {
  const [stocks] = useState(stocksData);
  // Duplicate items to create seamless looping
  const marqueeItems = [...items, ...items];
  return (
    <>
      <div className="">
        <InfiniteScrollAnimationPage stocks={stocks} />
        <div className="flex">
          {/* div 1 */}
          <div className="flex-1 flex flex-col items-center mt-5">
            <div className="overflow-hidden text-white flex items-center">
              {/* 公會廣告刊登預期放五個 */}
              <motion.div
                className="flex flex-col gap-2.5"
                animate={{ y: ["0%", "-50%"] }} // 往上移動一半高度
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration:45,
                  ease: "linear",
                }}
              >
                <div className="relative w-[220px] h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem}
                    alt="瞬殺"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>

                <div className="relative w-[220px]  h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem02}
                    alt="不想說"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>

                <div className="relative w-[220px] h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem03}
                    alt="凌雲閣"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>

                <div className="relative w-[220px] h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem05}
                    alt="嶽夜森林"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          {/* div 2 */}
          <div className="flex-1.5 flex flex-col items-center">
            <Hero />
            <LatestListing />
          </div>
          {/* div 3 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="overflow-hidden text-white flex items-center">
              <motion.div
                className="flex flex-col gap-2.5"
                animate={{ y: ["0%", "-50%"] }} // 往上移動一半高度
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration:45,
                  ease: "linear",
                }}
              >
                <div className="relative w-[220px] h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem06}
                    alt="今夜不准睡"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>

         
                <div className="relative w-[220px]  h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem07}
                    alt="鯊鯊"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>
               
                <div className="relative w-[220px] h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem08}
                    alt="白鴿"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>

                <div className="relative w-[220px]  h-[220px]">
                  <img
                    src={assets.bannerFrame}
                    alt="banner frame"
                    className="absolute inset-0 w-full h-full object-contain select-none"
                    draggable="false"
                  />
                  <img
                    src={assets.emblem04}
                    alt="土匪"
                    className="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square object-contain"
                    draggable="false"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
