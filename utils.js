export const getIdInstance = () => {
  const idInstance = localStorage.getItem("idInstance");
  if (!idInstance) return;
  return JSON.parse(idInstance);
};

export const getApiTokenInstance = () => {
  const apiTokenInstance = localStorage.getItem("apiTokenInstance");
  if (!apiTokenInstance) return;
  return JSON.parse(apiTokenInstance);
};

export const getTelephone = () => {
  const telephone = localStorage.getItem("telephone");
  if (!telephone) return;
  return telephone;
};

export function getRole() {
  const role = localStorage.getItem("role");
  if (!role) return;
  return role;
}

export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const LoadToBottom = () => {
  window.scrollTo({
    bottom: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const timestampToDate = (timestamp) => {
  // Create a new Date object with the Unix timestamp multiplied by 1000 to convert to milliseconds
  const date = new Date(timestamp * 1000);

  // Get the date and time components from the Date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date and time components into a string
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  // Combine the formatted date and time strings and return the result
  return `${formattedDate} ${formattedTime}`;
};

export const timestampToTime = (timestamp) => {
  // Create a new Date object with the Unix timestamp multiplied by 1000 to convert to milliseconds
  const date = new Date(timestamp * 1000);

  // Get the date and time components from the Date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date and time components into a string
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  // Combine the formatted date and time strings and return the result
  return `${formattedTime}`;
};

export const clearObject = (currentState, setState) => {
  const clearedState = Object.fromEntries(
    Object.keys(currentState).map((key) => [key, ""])
  );
  setState(clearedState);
};

// key down ENTER function
export const enterKeyDown = (e, functionToBeCalled) => {
  if (e.key === "Enter") {
    functionToBeCalled();
  }
};
