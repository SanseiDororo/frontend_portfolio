type buttonProps = {
  label: string
}

function Button({ label }: buttonProps) {
  return (
    <button className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full">
      {label}
    </button>
  )
}
export default Button
