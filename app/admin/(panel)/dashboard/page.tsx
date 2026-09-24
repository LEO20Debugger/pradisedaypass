export default function AdminDashboard() {
    const stats = [
        { title: 'Total Bookings', value: '1,247', change: '+12%', icon: 'calendar_today', color: 'primary' },
        { title: 'Revenue', value: '$89,432', change: '+8%', icon: 'payments', color: 'green' },
        { title: 'Active Resorts', value: '24', change: '+2', icon: 'hotel', color: 'purple' },
        { title: 'Pending Reviews', value: '18', change: '-3', icon: 'rate_review', color: 'orange' }
    ]

    const recentBookings = [
        { id: '1001', guest: 'John Smith', resort: 'The Shore Club', date: '2025-01-05', status: 'Confirmed', amount: '$150' },
        { id: '1002', guest: 'Sarah Johnson', resort: 'The Shore Club', date: '2025-01-06', status: 'Pending', amount: '$150' },
        { id: '1003', guest: 'Mike Wilson', resort: 'Wymara Resort', date: '2025-01-07', status: 'Confirmed', amount: '$185' },
        { id: '1004', guest: 'Emma Davis', resort: 'Wymara Resort', date: '2025-01-08', status: 'Cancelled', amount: '$185' }
    ]

    return (
        <main className="flex-1 flex flex-col gap-8 px-4 py-8 lg:px-8 lg:py-8 overflow-x-hidden">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-[#111418] dark:text-white mt-1">{stat.value}</h3>
                            <p className={`text-xs font-medium mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                {stat.change} from last month
                            </p>
                        </div>
                        <div className={`size-12 rounded-lg flex items-center justify-center ${stat.color === 'primary' ? 'bg-primary/10 text-primary' :
                            stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                                    'bg-orange-50 text-orange-600'
                            }`}>
                            <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-gray-700">
                    <h2 className="text-xl font-bold text-[#111418] dark:text-white">Recent Bookings</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Latest customer reservations</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-[#161f28] border-b border-[#dbe0e6] dark:border-gray-700">
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Booking ID</th>
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Guest</th>
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resort</th>
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <td className="p-4 text-sm font-medium text-[#111418] dark:text-white">#{booking.id}</td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.guest}</td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.resort}</td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.date}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm font-semibold text-[#111418] dark:text-white">{booking.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
