import { generateUsers } from "@/utils";

const allUsers = generateUsers(2000);

const fetchUsers = async (start: number, limit: number) => {
  await new Promise((r) => setTimeout(r, 700));

  return allUsers.slice(start, start + limit);
};

export default fetchUsers;
