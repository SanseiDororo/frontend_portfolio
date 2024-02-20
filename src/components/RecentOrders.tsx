import { orders } from '@/components/data/orders'
import { FaShoppingBag } from 'react-icons/fa'

type recentOrderProps = {}
function RecentOrders({}: recentOrderProps) {
  return (
    <div className="text-black w-full col-span-1 relative lg:h-[vh70] h-[50vh] p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {orders.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4 ">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gra4-400">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RecentOrders
