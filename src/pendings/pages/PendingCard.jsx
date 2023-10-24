

export const PendingCard = ({pending}) => {

   const { area, system, tag, detail, intervention_method } = pending;

   return (
      <div className='card mb-4 p-2'>
         <div className="d-flex justify-content-between align-items-center">
            <p>{ area }</p>
            <p>{ system }</p>
         </div>
         <div className="d-flex justify-content-between align-items-center">
            <p>{ tag }</p>
            <p>{ detail}</p>
         </div>
         <div className="d-flex justify-content-between align-items-center">
            <p>{ intervention_method }</p>
            <p> Instrumentación</p>
            <p>Alta</p>
         </div>
      </div >
   )
}