import { useSelector } from "react-redux";
import { PendingCard } from "./PendingCard";


export const PendingsList = () => {

   const { pendings } = useSelector((state) => state.pendings);
   console.log(pendings);

   return (
   <>
      {  
         pendings.map((pending) => 
            <PendingCard key={pending.id} pending={pending} />
         )
      }

   </>
   )
}