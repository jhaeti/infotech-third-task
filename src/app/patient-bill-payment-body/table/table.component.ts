import { Component } from '@angular/core';
import { DataModel } from './data.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = [
    'select',
    'date',
    'servicePlace',
    'description',
    'unitFee',
    'quantity',
    'paidQuantity',
    'dueQuantity',
    'amountDue',
    'action',
  ];

  dataSource = new MatTableDataSource<DataModel>([
    // {
    //   position: 3,
    //   date: '2001-1-1',
    //   servicePlace: 'string',
    //   description: 'string',
    //   unitFee: 'string',
    //   quantity: 'string',
    //   paidQuantity: 'string',
    //   dueQuantity: 'string',
    //   amountDue: 'string',
    //   action: 'string',
    // },
    // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ]);
  selection = new SelectionModel<DataModel>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DataModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
