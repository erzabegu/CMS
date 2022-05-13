import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}
const RenderTable = ({ item, handleUpdate }: Props) => {
    const [internalHeaders, setInternalHeaders] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setInternalHeaders(item.tableHeaders)
        setLoading(false)
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: internalHeaders ? internalHeaders : item.tableHeaders,
        data: item.tableData,
    })

    const addTableColumn = () => {
        const todos = { ...item }
        todos.tableHeaders.push({ Header: 'new', accessor: 'new' })
        handleUpdate(todos)
    }

    return <><table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
        <span onClick={addTableColumn}>+</span>
    </>

}

export default RenderTable