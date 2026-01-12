export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export const formatTime = (dateString: string) => {
  return new Date(dateString)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
};

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "GOOD MORNING";
  if (hour < 17) return "GOOD AFTERNOON";
  if (hour < 20) return "GOOD EVENING";
  return "GOOD NIGHT";
};

export const formatTimeTo12Hour = (time: any) => {
  if (!time) return "";

  const [hour, minute] = time.split(":").map(Number);

  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12; // convert 0 → 12

  return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
};
