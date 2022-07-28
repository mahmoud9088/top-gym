export const exercisesOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6d5330d8a0msh8fce180aa3f5536p1b3b72jsnef0cc2632004',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const youtubeSearchOption = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '6d5330d8a0msh8fce180aa3f5536p1b3b72jsnef0cc2632004',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
