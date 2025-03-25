import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LinkComponent from './Link'

const links = [{
    linkTitle: "GitHub", link:"https://github.com/MduduziNdlovu-dev"
},
{
    linkTitle: "Frontend Mentor", link:"https://www.frontendmentor.io/profile/MduduziNdlovu-dev"
},
{
    linkTitle: "linkedIn", link:"linkedin.com/in/mduduzi-ndlovu/"
}
]

const Card = () => {
  return (
    <Box
        className="card-bg"
        sx={{
            padding:"2rem",borderRadius:"0.75rem",
            display:"flex", flexDirection:"column",
            justifyContent:"center", alignItems:"center"
        }}
    >
        <Image src="/assets/images/asd.jpeg" alt='profile image'
        height={88} width={88}
        style={{borderRadius:"50%",marginBottom:"1.5rem"}}
        />

        <Typography variant='h1' sx={{fontSize:"2.25rem",marginBottom:"0.25rem"}}>Mduduzi Ndlovu</Typography>
        <Typography className='kgreen' variant='h2' sx={{fontSize:"1.3125rem", fontWeight:"600",marginBottom:"1.5rem"}}>Johannesburg, South Africa
        </Typography>

        <Typography sx={{fontSize:"1.3125rem", marginBottom:"1.5rem"}}>
            "Front-end Developer and Avid Gamer"
        </Typography>

        {
            links.map((link) => {
                return (
                    <LinkComponent key={link.linkTitle} linkData={link} />
                )
            })
        }
    </Box>
  )
}

export default Card