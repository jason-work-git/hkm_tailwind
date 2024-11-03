export function ListWithDisabledItem() {
  return (
    <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
        <div
          role="button"
          className="pointer-events-none opacity-50 text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          Inbox
        </div>
         <div
          role="button"
            className="text-slate-800  flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            Trash
          </div>
          <div
            role="button"
            className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            Settings
          </div>
      </nav>
    </div>
  );
}