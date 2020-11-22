import React from 'react'
import Link from 'next/link'
import StatisticWidget from './StatisticWidget'
import TableUser from './table/TableUser'

function DashboardChild(props: any) {
    return (
        <>
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/dashboard/product">
                <div className="cursor-pointer flex flex-col items-center justify-center p-4 rounded-lg">
                    <StatisticWidget type="LINE" width="L" name="Products" income="$241.30" fillColor="#8be0d1" strokeColor="#49d1b9" />
                </div>
            </Link>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <StatisticWidget type="LINE" width="L" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <StatisticWidget type="LINE" width="L" name="Visitors" income="1847" fillColor="#ded885"  strokeColor="#dbd24f"/>
            </div>
        </div>
        <TableUser/>
        </>
    )
}

export default DashboardChild
