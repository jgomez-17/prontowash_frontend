import { UserButton } from '@clerk/nextjs'

const Dashboard = () => {
  return (
    <div className='flex justify-between bg-slate-200/50 p-4'>
      <h1 className=' text-2xl font-semibold'>Dashboard</h1>
      <UserButton />
    </div>
  )
}

export default Dashboard