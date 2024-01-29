// "use client"
import OptionBtn from './OptionMenuSession';
import OptionMenuLogin from './OptionMenuLogin';
import { useSession } from 'next-auth/react';
import { getServerSession } from "next-auth"
import async from './dashboad/category/table';

const BtnOptionsSession = async () => {
    // const { data: session, status } = useSession()
    const session = await getServerSession()

    return (
        <>    {
            !session

                ? <OptionMenuLogin />

                : <OptionBtn />
        }
        </>
    )
}

export default BtnOptionsSession