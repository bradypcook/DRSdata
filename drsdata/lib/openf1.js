export async function getLatestLapTimes() {
  const res = await fetch('https://api.openf1.org/v1/lap_times?session_key=latest');
  
  if (!res.ok) throw new Error('Failed to fetch lap times');

  const data = await res.json();
  return data;
}