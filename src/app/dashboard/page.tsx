"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const { data: session, status, } = useSession()
    console.log({ session })
    console.log(status)
    return (
        <div>
            <h1>Dashboard</h1>
            <code>{JSON.stringify(session)}</code>
        </div>
    )
}

export default Dashboard