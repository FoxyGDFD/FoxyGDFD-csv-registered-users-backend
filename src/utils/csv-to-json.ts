import { CSV_SEPARATOR } from '../constants';
import { trimListItems } from './trim-list-items';

interface CsvRow {
  [key: string]: string;
}
export type JsonCsv = CsvRow[];

export const csvToJson = (csv: string): JsonCsv => {
  const jsonData: JsonCsv = [];
  const rows: string[] = csv.split('\r\n');
  const headers: string[] = trimListItems(
    (rows.shift() as string).split(CSV_SEPARATOR)
  );

  rows.forEach(row => {
    const cells = row.split(CSV_SEPARATOR);
    const rowData: CsvRow = {};
    cells.forEach((cell, cellIndex) => {
      const key = headers[cellIndex];
      rowData[key] = cell;
    });
    jsonData.push(rowData);
  });

  return jsonData;
};
