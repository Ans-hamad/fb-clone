export async function fetchProfiles(){
    const response = await fetch('http://localhost:4000/profiles');
    return response.json()
}