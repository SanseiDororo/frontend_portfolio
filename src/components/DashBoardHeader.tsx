type headerDashboardProps = {
  title: string
  greeting: string
}
function DashBoardHeader({ title, greeting }: headerDashboardProps) {
  return (
    <div className="flex justify-between px-4 pt-4 text-black">
      <h2>{title}</h2>
      <h2>{greeting}</h2>
    </div>
  )
}
export default DashBoardHeader
