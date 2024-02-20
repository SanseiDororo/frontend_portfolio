export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInKilometresPerHour = speedInMetersPerSecond * 3.6
  return `${speedInKilometresPerHour.toFixed(0)} km/h`
}
