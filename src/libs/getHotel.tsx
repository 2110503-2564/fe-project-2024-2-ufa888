export default async function getVenue(id: string) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels`);

    if(!response.ok) throw new Error("Failed to fetch venue");

    return await response.json();
}