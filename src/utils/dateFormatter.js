function dateFormatter(mode, dateInput) {
  if (!dateInput) {
    return null;
  }

  if (mode === "deformat" && typeof dateInput === "string") {
    // Deformatting: Convert "DD-MMM-YYYY" to "YYYY-MM-DD"
    const [day, month, year] = dateInput.split("-");
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    // Validate month
    if (!(month in months)) {
      throw new Error("Invalid month in date input");
    }

    // Create a new date object
    const date = new Date(year, months[month], day);

    // Validate the date object
    if (isNaN(date)) {
      throw new Error("Invalid date input");
    }

    // Format the date to "YYYY-MM-DD"
    return date.toISOString().split("T")[0];
  } else if (mode === "format" && typeof dateInput === "string") {
    // Formatting: Convert "YYYY-MM-DD" to "DD-MMM-YYYY"
    const [year, month, day] = dateInput.split("-");

    // Validate the input format
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      throw new Error("Invalid date input format");
    }

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedMonth = months[parseInt(month, 10) - 1];

    if (!formattedMonth) {
      throw new Error("Invalid month in date input");
    }

    return `${day}-${formattedMonth}-${year}`;
  } else {
    throw new Error("Invalid mode or date input format");
  }
}

export default dateFormatter;
