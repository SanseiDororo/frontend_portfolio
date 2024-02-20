import DashboardPage from '@/components/DashSidebar'
import DashBoardHeader from '@/components/DashBoardHeader'
import TopDashCards from '@/components/TopDashCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'

const Dashboard = () => {
  return (
    <DashboardPage>
      <DashBoardHeader greeting="Welcome Back, user" title="Dashboard" />
      <TopDashCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </DashboardPage>
  )
}
export default Dashboard
