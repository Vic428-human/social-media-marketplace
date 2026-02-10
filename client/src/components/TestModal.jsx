import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-10 bg-black/70 overflow-hidden flex items-center justify-center px-3 transition-opacity duration-300"
    >
      <div className="relative w-full max-w-[800px] h-[70vh] max-h-[70vh] bg-[#9f4141] p-4 rounded-2xl">
        <div className="rounded-lg p-6 h-full">
          {/* 這層用來包「卡片」+「右下角怪」 */}
          <div className="relative h-full">
            {/* 紅包袋裡的信封 */}
            <div className="relative flex items-center justify-center rounded-lg bg-yellow-300 h-full px-4 py-2">
              {/* 底層：歪的那張 */}
              <div className="absolute inset-0 rounded-2xl bg-white shadow-xl rotate-[5deg] ring-1 ring-black/10" />

              {/* 上層：正的那張 */}
              <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl z-[1] ring-1 ring-black/10">
                <div className="p-6 h-full overflow-y-auto">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    📢 最新更新事件
                  </h2>
                  {/* 真正可滾動區 */}
                  <div
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-4 pointer-events-auto focus:outline-none"
                    tabIndex={0}
                  >
                    <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                      {[
                        {
                          date: "2026.02.10",
                          title: "紅包袋樣式的更新事件彈窗",
                          desc: "漂亮的紅包袋樣式更新事件彈窗已上架。",
                        },
                        {
                          date: "2026.02.09",
                          title: "交易市集簡易計算機",
                          desc: "快速計算交易市集商品的總額",
                        },
                        {
                          date: "2026.02.09",
                          title: "優化拍賣場模組",
                          desc: "改成讓玩家自己決定是否開啟拍賣場彈出畫面",
                        },

                        // 多塞幾筆讓你測 scroll
                        ...Array.from({ length: 12 }).map((_, i) => ({
                          date: "2026.01.xx",
                          title: `測試項目 ${i + 1}`,
                          desc: "這是一段用來測試 scroll 的假資料，內容超出就應該只在這區滾動。",
                        })),
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="pt-4 border-t border-gray-200 first:pt-0 first:border-t-0"
                        >
                          <p className="font-semibold text-gray-900">
                            {item.date}｜{item.title}
                          </p>
                          <p>{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 右下角的小惡魔 */}
            <div
              className="absolute right-[-70px] bottom-[-28px] w-[187px] h-[203px] bg-no-repeat bg-contain z-[3] "
              style={{
                backgroundImage:
                  "url('https://static.gnjoy.com.tw/TRO/event/20260210_rozYearHorse/img/popup-deviruchi.png')",
              }}
            />
          </div>
        </div>

        {/* 紅包袋 */}
        <div
          className="absolute left-0 -bottom-5 w-full h-[206px] bg-center bg-bottom bg-no-repeat bg-contain rounded-b-[20px] z-[2] "
          style={{
            backgroundImage:
              "url('https://static.gnjoy.com.tw/TRO/event/20260210_rozYearHorse/img/popup-front.png')",
          }}
        />
      </div>
      {/* 關閉按鈕 */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="
    absolute top-4 left-1/2 -translate-x-1/2
    z-[20]
    w-10 h-10
    rounded-full
    bg-black/70
    text-white text-xl font-bold
    flex items-center justify-center
    hover:bg-black
    transition
    focus:outline-none
  "
      >
        ✕
      </button>
    </div>
  );
}
