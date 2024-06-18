'use client';

const RefreshBtnRainGauge = () => {

    function handleClick() {
        window.location.reload();
      }

  return (
    <button
      className=" flex gap-3 justify-center items-center bg-slate-500 rounded-xl text-sm sm:text-base hover:bg-sky-500 text-center py-3 px-3"
      onClick={handleClick}
    >
      <img src="/refresh.png" height={25} width={25} alt="refresh" />
      <span>Refresh</span>
    </button>
  );
};

export default RefreshBtnRainGauge;
