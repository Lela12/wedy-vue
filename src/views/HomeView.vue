/* eslint-disable */
<template>
  <div
    class="flex flex-col overflow-hidden bg-center bg-cover bg-main-bg place-items-center place-content-center h-[300px]"
  >
    <div />
    <div class="flex flex-col items-center w-full gap-16 px-10 font-bold">
      <header class="text-center">
        <span class="text-[28px] leading-4">Wedy</span>
      </header>
      <form
        class="flex justify-between w-full gap-2 px-6 border-2 border-lightgray rounded-full w-[320px] h-[40px]"
        @submit.prevent=""
      >
        <input
          id="main-search-bar"
          class="py-1 bg-transparent placeholder:text-gray-400 placeholder:opacity-90 text-[15px] w-full"
          type="text"
          placeholder="현재 위치를 입력해 주세요.  ex)강남구"
        />
        <button type="submit"></button>
      </form>
    </div>
  </div>
</template>
