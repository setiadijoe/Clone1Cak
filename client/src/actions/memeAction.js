import axios from 'axios'

export const getHeroes= () => {
	return {
		type: "GET_MEMES",
	}
}

export const uploadMeme= (titleMeme,imageUrlMeme) => {
	return {
		type: "UPLOAD_MEME",
		payload: {
			title: titleMeme,
			avatarUrl: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png',
			imageUrl: imageUrlMeme
		}
	}
}

export const fetchApiMemes= () => {
	return (dispatch,getState) => {
		dispatch(getHeroes())
	}
}