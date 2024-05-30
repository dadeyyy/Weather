export async function GET(){
    const res = await fetch('https://api.thingspeak.com/channels/2531448/feeds.json?api_key=UFR2I5V9Z9KMQ10X')

    const data = await res.json();

    return Response.json({data});
}