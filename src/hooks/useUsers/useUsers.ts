import { useState, useEffect } from "react";
import type { User } from "@/types";
import { fetchUsers } from "@/utils";

const LIMIT = 50;

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading) return;

    setLoading(true);

    const newUsers = await fetchUsers(users.length, LIMIT);

    setUsers((prev) => [...prev, ...newUsers]);

    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      await loadMore();
    };

    init();
  }, []);

  return { users, loadMore, loading };
};

export default useUsers;
