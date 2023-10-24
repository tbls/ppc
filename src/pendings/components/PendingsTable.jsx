import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { useMemo } from "react";
import { useSelector } from "react-redux";


export const PendingsTable = () => {

   // "id": 2,
   // 'area':"Servicios Auxiliares A",
   // 'system': "Acondicionamiento de Aceite Térmico",
   // 'tag': 'LIT-25850',
   // 'detail': 'Display en mal estado',
   // 'intervention_method': 'En Operacion'


   const { pendings } = useSelector((state) => state.pendings);

   const data = useMemo(() => pendings, [])

   const columns = [
      {
         header: 'ID',
         accessorKey: 'id',
         
      },
      {
         header: 'Área',
         accessorKey: 'area',
      },
      {
         header: 'Sistema',
         accessorKey: 'system',
      },
      {
         header: 'Tag',
         accessorKey: 'tag',
      },
      {
         header: 'Detalle',
         accessorKey: 'detail',
      },
      {
         header: 'Método de Intervención',
         accessorKey: 'intervention_method',
      },
   ]

   const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});
   return (
      <div>
      <table className="text-center table table-sm align-middle table-striped table-hover">
         <thead>
         {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
               {headerGroup.headers.map(header => (
                  <th key={header.id}>
                     {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
               ))}
            </tr>
         ))}
         </thead>
         <tbody>
            {table.getRowModel().rows.map(row =>(
               <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                     <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
      </div>
   )
}
