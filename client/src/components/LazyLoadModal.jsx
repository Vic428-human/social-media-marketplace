import React, { useState, lazy, Suspense } from "react";

const Modal = lazy(() => import("./Modal"));
const TestModal = lazy(() => import("./TestModal"));

export default function LazyLoadModal() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    if (showModal) return; // 避免重複觸發

    setIsLoading(true);

    setTimeout(() => {
      setShowModal(true);
      setIsLoading(false);
    }, 1000); // 5000ms = 5秒
  };

  return (
    <div className="p-10 relative z-500">
      <button
        disabled={isLoading || showModal}
        onClick={handleOpen}
        className="px-6 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isLoading ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            招喚超大紅包...
          </>
        ) : (
          "招喚超大紅包"
        )}
      </button>

      <Suspense fallback={null}>
        {/* 這邊放拍賣場 */}
        {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}
        {/* 這邊招喚更新進度 */}
        {showModal && <TestModal onClose={() => setShowModal(false)} />}
      </Suspense>
    </div>
  );
}
