export default async function FetchReviews () {
try {
    const res = await fetch("https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/reviews")
    if(!res.ok) {
        throw new Error(`faild fetch Tour-place : ${res.status}`)
    }
    const data = await res.json()
    return data
} catch (error) {
    console.error("Error fetching Tour-place data:", error);
    throw error;
}
}