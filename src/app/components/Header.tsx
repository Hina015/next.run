import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex gap-11 rounded-xl p-15 dark bg-slate-400'>
        <Link href="\">Home page</Link>
        <Link href="\name">Name page</Link>
        <Link href="\address">Address page</Link>
</div>
  )
}

export default Header