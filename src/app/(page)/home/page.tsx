import { User } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.APP_URL}/api/users`);
  const users: User[] = await res.json();

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
