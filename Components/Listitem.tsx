"use client"
import { useRouter } from "next/navigation";

interface ListItemProps{
    image: string;
    name:string;
    href: string;
}



const Listitem:React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();
    const onClick = ()=>{
        //
        router.push(href)
    }
  return (
    <div>Listitem</div>
  )
}

export default Listitem