import { promises as fs } from 'fs'
import Image from 'next/image'
/* 
  Tech stack that im using readed from folder ./public/techstack/
*/
function StackList (props: { items: string[], folder: string }) {
  const items = props.items
  const folder = props.folder
  return <div className='flex flex-wrap gap-3 justify-center'>
    {
      items.map((e,key) => {
        const name = e.split('.')[0]
        return <div key={key} className={`bg-white p-1 rounded-xl hover:scale-110 transform duration-150`} title={name}>
          <Image
            className='m-auto'
            width={70}
            height={70}
            src={`/techstack/${folder}/${e}`}
            alt={name}
          />
        </div>
      })
    }
  </div>
}

export default async function TechStack() {
  const advanced = await fs.readdir('./public/techstack/advanced')
  const beginner = await fs.readdir('./public/techstack/beginner')
  const intermediate = await fs.readdir('./public/techstack/intermediate')
  return <div className='mt-6 text-4xl'>
    <div className='opacity-40 p-3'>Advanced</div>
    <StackList items={advanced} folder='advanced'/>
    <div className='opacity-40 p-3'>Intermediate</div>
    <StackList items={intermediate} folder='intermediate'/>
    <div className='opacity-40 p-3'>Beginner</div>
    <StackList items={beginner} folder='beginner'/>
  </div>
}