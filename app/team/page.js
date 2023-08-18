'use client'

import { useRouter,  } from 'next/navigation'
import { Button } from '@mui/material'
import CPU from '../../public/CPU.jpeg';

export default function Page() {
    const router = useRouter()

    return (
        <div>
            <div className={"background"}>
                <img src={CPU} alt={"cpu-background"} className={"CPU"}/>
            </div>
            <h1>Teams Page</h1>
            <ol>
                <h2>Development Team</h2>
                <li>Naad</li>
                <li>Rishi</li>
                <li>Saransh</li>
                <li>Arunabha</li>
                <li>Dev</li>
            </ol>
            <Button variant="contained" onClick={() => router.push('/')}>Back to HomePage</Button>
        </div>
    )
}