import { useTable } from 'react-table'
import { TableHead } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from 'material-ui/Table';
import Paper from '@mui/material/Paper';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
    pageId: any;
    sectionId: any;
}

const RenderTable = ({ item, handleUpdate, handleUpdateWithSection, pageId, sectionId }: Props) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: item.tableHeaders,
        data: item.tableData,
    })

    const addTableColumn = () => {
        const todos = { ...item }
        todos.tableHeaders.push({ Header: 'new', accessor: 'new' })
        handleUpdate(todos)
        // handleUpdateWithSection(todos, pageId, sectionId, 0)
    }
    const demoAddTableColumn = (i: number) => {
        const todos = { ...item }
        todos.tableHeaders.push({ Header: 'new', accessor: 'new' })
        todos.tableData.push({ new: '34' })
        // handleUpdate(todos)
        handleUpdateWithSection(todos, pageId, sectionId, i)
    }

    return <>
        <table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            // console.log(column,'column')
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                console.log(row.original)
                                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
            <tfoot>
                {footerGroups.map((group, i) => (
                    <tr {...group.getFooterGroupProps()}>
                        {/* <td onClick={() => addTableColumn()}>+</td> */}
                        <TableCell onClick={() => demoAddTableColumn(i)}>+</TableCell>
                    </tr>
                ))}
            </tfoot>
        </table>
    </>
}

export default RenderTable