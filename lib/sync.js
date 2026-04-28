// Real-time Global Sync using Firebase REST API
// This works without 'npm install firebase'!

const FIREBASE_URL = "https://amigate-3533e-default-rtdb.firebaseio.com"; // Updated with your project ID

export async function getAllUsers() {
  try {
    const res = await fetch(`${FIREBASE_URL}/users.json`);
    const data = await res.json();
    if (!data) return [];
    // Convert Firebase object to array
    return Object.keys(data).map(key => ({
      ...data[key],
      firebaseId: key
    }));
  } catch (e) {
    console.error("Sync Error:", e);
    return [];
  }
}

export async function saveUser(userData) {
  try {
    // Check if user exists by email
    const users = await getAllUsers();
    const existing = users.find(u => u.email === userData.email);
    
    if (existing) {
      // Update
      await fetch(`${FIREBASE_URL}/users/${existing.firebaseId}.json`, {
        method: 'PATCH',
        body: JSON.stringify(userData)
      });
      return { ...existing, ...userData };
    } else {
      // Create
      const res = await fetch(`${FIREBASE_URL}/users.json`, {
        method: 'POST',
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      return { ...userData, firebaseId: data.name };
    }
  } catch (e) {
    console.error("Save Error:", e);
    return userData;
  }
}

export async function updateLastSeen(email) {
  try {
    const users = await getAllUsers();
    const user = users.find(u => u.email === email);
    if (user) {
      await fetch(`${FIREBASE_URL}/users/${user.firebaseId}.json`, {
        method: 'PATCH',
        body: JSON.stringify({ lastSeen: new Date().toLocaleTimeString() })
      });
    }
  } catch (e) {}
}

export async function deleteUserFromDB(firebaseId) {
  try {
    await fetch(`${FIREBASE_URL}/users/${firebaseId}.json`, {
      method: 'DELETE'
    });
  } catch (e) {}
}
