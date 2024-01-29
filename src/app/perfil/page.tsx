import React from 'react'
import { getServerSession } from "next-auth"
import Image from 'next/image'
import { redirect } from 'next/navigation';

const Perfil = async () => {
    const session = await getServerSession()
    if (!session) {
        redirect('/auth/login')
        return


    }
    return (
        <div className='flex flex-col justify-center items-center space-y-3'>
            <h2>Perfil</h2>
            {session?.user?.image ?
                <Image
                    src={session?.user?.image}
                    alt="Picture of the author"
                    width={80}
                    height={80}
                /> : null
            }
            <h2>{session?.user?.name}</h2>
            <h2>{session?.user?.email}</h2>
        </div >
    )
}

export default Perfil