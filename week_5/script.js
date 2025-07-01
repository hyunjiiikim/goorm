document.addEventListener("DOMContentLoaded", () => {
  const spreadsheet = document.getElementById("spreadsheet");
  const cellInfo = document.getElementById("cellInfo");
  const exportBtn = document.getElementById("exportBtn");

  spreadsheet.addEventListener("click", (e) => {
    const td = e.target.closest("td");
    if (!td) return;

    spreadsheet.querySelectorAll("th, td").forEach(el =>
      el.classList.remove("highlight", "selected")
    );

    const row = td.getAttribute("data-row");
    const col = td.getAttribute("data-col");
    cellInfo.textContent = `Cell: ${col}${row}`;
    td.classList.add("selected");

    const colIndex = col.charCodeAt(0) - 64 + 1;
    const rowIndex = parseInt(row) + 1;

    spreadsheet.querySelector(`thead th:nth-child(${colIndex})`)?.classList.add("highlight");
    spreadsheet.querySelector(`tbody tr:nth-child(${rowIndex}) th`)?.classList.add("highlight");
  });

  exportBtn.addEventListener("click", () => {
    const wb = XLSX.utils.book_new();
    const data = [];

    spreadsheet.querySelectorAll("tbody tr").forEach((rowTr) => {
      const row = [];
      rowTr.querySelectorAll("td").forEach((cell) =>
        row.push(cell.textContent)
      );
      data.push(row);
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "spreadsheet.xlsx");
  });
});
