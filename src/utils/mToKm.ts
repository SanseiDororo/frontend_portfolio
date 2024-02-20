export function mToKm(visibilityInMeters: number): string {
  const visibilityInKilometres = visibilityInMeters / 1000
  return `${visibilityInKilometres.toFixed(0)}km`
}
