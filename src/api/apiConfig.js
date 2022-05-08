const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6eecc3382b3691fd54aef5329aa6e1ca',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;