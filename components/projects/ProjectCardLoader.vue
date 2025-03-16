<template>
  <div class="bg-slate-850 rounded-md overflow-hidden h-full border-l-2 border-transparent animate-pulse">
    <!-- image -->
    <div class="bg-slate-800 w-full aspect-[16/9] relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-6 h-6 border border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>

    <!-- content -->
    <div class="p-4">
      <!-- title -->
      <div class="h-6 bg-slate-800 rounded-none mb-3 w-3/4"></div>

      <!-- description -->
      <div class="space-y-2">
        <div class="h-4 bg-slate-800 rounded-none w-full"></div>
        <div class="h-4 bg-slate-800 rounded-none w-5/6"></div>
      </div>

      <!-- tags -->
      <div class="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        <div class="h-4 w-12 bg-slate-800"></div>
        <div class="h-4 w-16 bg-slate-800"></div>
        <div class="h-4 w-10 bg-slate-800"></div>
      </div>
    </div>
  </div>
</template>