const convert = document.getElementById("convert")

const employees = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
  { name: 'Bob Johnson', age: 40 },
];

var csv = Papa.unparse(employees, {
  delimiter: ";",
  header: true,
  newline: "\r\n",
  skipEmptyLines: true,
});



convert.addEventListener("click", function (e) {
  e.preventDefault()

  // Create a blob from the CSV string
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  // Create a link to download the CSV file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'employees.csv';

  // Click the link to download the CSV file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);


})