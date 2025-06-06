// File: src/app/api/book/route.js
export async function POST(req) {
  const data = await req.json();

  // Here you can process the booking
  // Send to a database or third-party service (email/WhatsApp)

  console.log("Booking received:", data);

  return new Response(JSON.stringify({ message: "Booking successful" }), {
    status: 200,
  });
}
