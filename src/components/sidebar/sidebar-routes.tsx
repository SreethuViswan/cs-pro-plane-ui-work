"use client"
import React from 'react'
import { Compass, Layout } from 'lucide-react'
import SidebarItem from './sidebar-item'
import { usePathname } from 'next/navigation'
import { RouteList } from '@/constants/sidebar'

const SidebarRoutes = () => {
   

    const routes = RouteList
    
  return (
    <div className='flex flex-col w-full'>
        {
            routes.map((route) => (
                <SidebarItem
                key = { route.href }
                icon = { route.icon }
                label = { route.label }
                href = { route.href }
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes