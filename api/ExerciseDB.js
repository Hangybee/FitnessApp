const baseUrl = "https://exercisedb.p.rapidapi.com/"

const fetchApi = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '193ac5b4b5msh6db7f943392e432p1aa14bjsn9470247d0841',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            console.log('error occured with', url)
        }
        else {
            const result = await response.json()
            return result
        }
    }
    catch (error) {
        console.log('Some error occured', error)
        return error
    }
}

export const fetchExerciseBodyPart = async () => {
    let data = await fetchApi(baseUrl + `exercises/bodyPart/back?limit=10`)
    return data
}