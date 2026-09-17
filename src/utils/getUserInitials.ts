export const getUserInitials = (userName: string) =>
  userName
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
