type summaryProps = {
  title: string
  summary: string
}
const Summary = ({ title, summary }: summaryProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-white text-bold text-4xl">{title}</h2>
      <p className="text-pale-blue text-center">{summary}</p>
    </div>
  )
}
export default Summary
