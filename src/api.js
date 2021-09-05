import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "1b9e4b85e90b73deb159485a7c7bf064",
        language : "en-US",
    }
})

export const movieApi = {
    nowPlaying  : () => api.get(`movie/now_playing`),
    upcoming : () => api.get(`movie/upcoming`),
    popular : () => api.get(`movie/popular`),
    detail : (id) => api.get(`movie/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (keyword) => api.get(`search/movie`, {
        params : {
            query : encodeURIComponent(keyword)
        }
    })
}

export const tvShowApi = {
    topRated : () => api.get(`tv/top_rated`),
    popular : () => api.get(`tv/popular`),
    airingToday : () => api.get(`tv/airing_today`),
    detail : (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (keyword) => api.get(`search/tv`, {
        params : {
            query : encodeURIComponent(keyword)
        }
    })
}


//Container - Presenter 패턴

//Container
// - api 호출, data 를 가지고있음, 비지니스 로직

//Presenter
// - Container 로부터 data 를 받아서 뿌리기, css, 그려주는 역할