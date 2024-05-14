export * from './csv-to-json';
export * from './loger';
export * from './trim-list-items';

// export const jsonToCsv = (json: JSON_CSV) => {

//     const header = Object.keys(json[0]);
//     const headerString = header.join(CSV_SEPARATOR);

//     const replacer = (_: string, value: string) => value ?? '';

//     const rowItems = json.map((row) =>
//       header
//         .map((key) => JSON.stringify(row[key], replacer))
//         .join(CSV_SEPARATOR)
//     );

//     const csv = [headerString, ...rowItems].join('\r\n');

//     return csv;
// }
