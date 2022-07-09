export const transformColumnNameToLabel = (columnName) => {
  const columnNameSplit = columnName.split('_');
  const columnNameSplitLength = columnNameSplit.length;
  let columnLabel = '';
  for (let i = 0; i < columnNameSplitLength; i++) {
    columnLabel += columnNameSplit[i].charAt(0).toUpperCase() + columnNameSplit[i].slice(1);
    if (i < columnNameSplitLength - 1) {
      columnLabel += ' ';
    }
  }
  return columnLabel;
}