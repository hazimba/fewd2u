import { User } from "@/types";
import { baseUrl } from "@/lib/getBaseUrl";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const res = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await res.json();

  console.log("Users (Server Component):", users);

  return (
    <div>
      <h1>Users (Server Component)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
