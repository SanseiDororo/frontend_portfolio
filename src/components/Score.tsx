type scoreProps = {
  overall: string
  outof: string
}

function Score({ overall, outof }: scoreProps) {
  return (
    <div className="rounded-full w-[240px] h-[240px] bg-gradient-to-t from-slate-blue-light to-slate-blue-dark flex flex-col gap-2 items-center justify-center shadow-xs shadow-white">
      <h1 className="text-7xl font-semibold">{overall}</h1>
      <p className="text-base text-slate-400">{outof}</p>
    </div>
  )
}
export default Score
