const baseUrl = "https://api.themoviedb.org/3/"
const defaultParams = "?api_key=9491772c898b766bec3d7dfcaac4b98e&language=en-US"
export const imagePath = "https://image.tmdb.org/t/p/w500"

const url = (url: string) => {
    return baseUrl + url + defaultParams
}

export const getTrendMovies = async (keyword:string) => {
    const res = await fetch(url('trending/movie/'+keyword))
    const data = await res.json()

    return data;
}


export const getPopularMovies = async (keyword:string) => {
    const res = await fetch(url(keyword))
    const data = await res.json()

    return data;
}

export const getMovieVideo = async (type:string, keyword:number) => {
    const res = await fetch(url(`${type}/${keyword}/videos`))
    const data = await res.json()
    return data;
}