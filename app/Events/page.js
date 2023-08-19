'use client'

import { useRouter,  } from 'next/navigation'
import { Button } from '@mui/material'
import CPU from '../../public/CPU.jpeg';
import Image from 'next/Image';

export default function Page() {
    const router = useRouter()

    return (

        
        <div>
            <div className={"background"}>
                <Image src={CPU} alt={"cpu-background"} className={"CPU"}/>
            </div>
            <h1>Events Page</h1>
            <Button variant="contained" onClick={() => router.push('/')}>Back to HomePage</Button>
        </div>
    )
}