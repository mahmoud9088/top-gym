export const exercisesOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '35c92b8cc7msh71d7d79b4d780c1p1ab277jsncc8e93902ec2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const youtubeSearchOption = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '35c92b8cc7msh71d7d79b4d780c1p1ab277jsncc8e93902ec2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
