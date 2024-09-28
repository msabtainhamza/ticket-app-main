import { jsPDF } from "jspdf";
import "jspdf-autotable";

const generatePDF = () => {
  const doc = new jsPDF();

  // Adding the title
  doc.text("Events Table", 20, 10);

  // Define the columns we want and their titles
  const columns = [
    { header: "Status", dataKey: "status" },
    { header: "Event Name", dataKey: "name" },
    { header: "Location", dataKey: "location" },
    { header: "Date/Time", dataKey: "dateTime" },
    { header: "Ticket Sale", dataKey: "sale" },
    { header: "Capacity", dataKey: "capacity" },
    { header: "Price", dataKey: "price" },
    { header: "Type", dataKey: "type" },
    { header: "Reviews", dataKey: "reviews" },
  ];

  // Map the data to match the columns
  const rows = events.map((event) => ({
    status: event.status,
    name: event.name,
    location: event.location,
    dateTime: `${event.date} / ${event.time}`,
    sale: event.sale,
    capacity: event.capacity,
    price: event.price,
    type: event.type,
    reviews: event.reviews,
  }));

  // Add autoTable to the document
  doc.autoTable({
    head: [columns.map((col) => col.header)],
    body: rows.map((row) => columns.map((col) => row[col.dataKey])),
  });

  // Save the document
  doc.save("events_table.pdf");
};
