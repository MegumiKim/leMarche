export default function formatInKrone(number) {
  const krone = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NOK",
  });

  return krone.format(number);
}
