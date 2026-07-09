import "dotenv/config";

const adminEmails =
  process.env.ADMIN_EMAIL?.split(",").map((email) => email.trim()) ?? [];

export function isAdminEmail(email: string) {
  console.log("Admin emails", adminEmails);

  return adminEmails.includes(email);
}
