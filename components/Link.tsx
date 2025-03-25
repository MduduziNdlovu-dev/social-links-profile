import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'



interface LinkProps {
    linkData: {linkTitle: string,
    link: string}
}

const CustomLink = ({linkData} : LinkProps) => {
  return (
    <Box
        className="link-bg"
        sx={{
            padding:"0.75rem 5.625rem", borderRadius:"0.75rem",
            width:"14rem",display:"flex",justifyContent:"center", alignItems:"center",margin:"0.5rem 0"
        }}
    >
     <Link
        href={linkData.link}
        className='links'
        target="_blank"
        rel="noopener noreferrer"
        >{linkData.linkTitle}
     </Link>   
    </Box>
  )
}

export default CustomLink