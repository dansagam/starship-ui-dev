import { RefType } from "@/@types/baseInterface";
import React from "react";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;
type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>;
type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement>;
type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableCellElement>;
type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement>;
type TableFooterProps = React.TableHTMLAttributes<HTMLTableSectionElement>;
type TableContainerProps = React.HTMLAttributes<HTMLDivElement>;
// & {
//   TableRow: React.ForwardRefExoticComponent<React.TableHTMLAttributes<HTMLTableRowElement>> &  React.RefAttributes<HTMLTableElement>
// }

type ComposeTableProps = RefType<HTMLTableElement, TableProps> & {
  TableRow: RefType<HTMLTableRowElement, TableRowProps>;
  TableCell: RefType<HTMLTableCellElement, TableCellProps>;
  TableBody: RefType<HTMLTableSectionElement, TableBodyProps>;
  TableHead: RefType<HTMLTableSectionElement, TableHeadProps>;
  TableHeadCell: RefType<HTMLTableCellElement, TableHeadCellProps>;
  TableFooter: RefType<HTMLTableSectionElement, TableFooterProps>;
  Container: RefType<HTMLDivElement, TableContainerProps>;
};
// @ts-ignore
const Table: ComposeTableProps = React.forwardRef<HTMLTableElement, TableProps>(function ({ children, ...rest }, ref) {
  return (
    <table ref={ref} {...rest}>
      {children}
    </table>
  );
});
Table.TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(function ({ children, ...rest }, ref) {
  return (
    <tbody ref={ref} {...rest}>
      {children}
    </tbody>
  );
});
Table.TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(function ({ children, ...rest }, ref) {
  return (
    <td ref={ref} {...rest}>
      {children}
    </td>
  );
});
Table.TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(function ({ children, ...rest }, ref) {
  return (
    <tfoot ref={ref} {...rest}>
      {children}
    </tfoot>
  );
});
Table.TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(function ({ children, ...rest }, ref) {
  return (
    <thead ref={ref} {...rest}>
      {children}
    </thead>
  );
});

Table.TableHeadCell = React.forwardRef<HTMLTableCellElement, TableHeadCellProps>(function ({ children, ...rest }, ref) {
  return (
    <th ref={ref} {...rest}>
      {children}
    </th>
  );
});

Table.TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(function ({ children, ...rest }, ref) {
  return (
    <tr ref={ref} {...rest}>
      {children}
    </tr>
  );
});
Table.Container = React.forwardRef<HTMLDivElement, TableContainerProps>(function ({ children, ...rest }, ref) {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

Table.displayName = "Table";

export default Table;
