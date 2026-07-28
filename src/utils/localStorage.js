export const USERS_KEY = "users";
export const CURRENT_USER_KEY = "currentUser";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function saveCurrentUser(id) {
  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      id,
    })
  );
}

export function getCurrentUser() {
  const session = JSON.parse(
    localStorage.getItem(CURRENT_USER_KEY)
  );

  if (!session) return null;

  return (
    getUsers().find(
      (user) => user.id === session.id
    ) || null
  );
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}