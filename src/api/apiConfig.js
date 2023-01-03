const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5bd3701852eb8090dba6b02cf5f0d975',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;