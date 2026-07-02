function Page() {
  return (
    <div className="flex justify-center gap-3 mt-8">

      <button className="bg-sky-600 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-sky-700 transition">
        1
      </button>

      <button className="border border-slate-200 text-slate-700 px-4 py-2 rounded-xl hover:border-sky-500 transition">
        2
      </button>

      <button className="border border-slate-200 text-slate-700 px-4 py-2 rounded-xl hover:border-sky-500 transition">
        3
      </button>

      <button className="border border-slate-200 text-slate-700 px-4 py-2 rounded-xl hover:border-sky-500 transition">
        &gt;
      </button>

    </div>
  );
}

export default Page;