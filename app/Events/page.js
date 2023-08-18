'use client'

import { useRouter,  } from 'next/navigation'
import { Button } from '@mui/material'

export default function Page() {
    const router = useRouter()

    return (
        <div>
            <h1>Events Page</h1>
            <Button variant="contained" onClick={() => router.push('/')}>Back to HomePage</Button>
        </div>
    )
}