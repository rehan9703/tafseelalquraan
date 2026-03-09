// Simple no-op streak worker — auth/database removed from this project
// Streak tracking is handled client-side via Zustand + localStorage

export const startStreakWorker = () => {
    console.log('ℹ  Streak worker: running in client-side mode — no server DB needed');
};

export default { startStreakWorker };
