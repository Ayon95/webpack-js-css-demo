export function generateRandomID() {
  console.log(
    Date.now().toString(36) + Math.random().toString(36).substring(2)
  );
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
