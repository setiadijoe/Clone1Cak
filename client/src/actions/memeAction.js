import axios from 'axios'

export const getMemes= () => {
	return {
		type: "GET_MEMES",
	}
}

export const getMeme= (memeId) => {
	return {
		type: "GET_MEME",
		payload: memeId
	}
}

export const uploadMeme= (titleMeme,imageUrlMeme,nameUser) => {
	alert(JSON.stringify(imageUrlMeme))
	return {
		type: "UPLOAD_MEME",
		payload: {
			title: titleMeme,
			avatarUrl: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png',
			imageUrl: imageUrlMeme,
			author: nameUser,
			funny: [],
			comment: []			
		}
	}
}

export const likeMeme= (memeId,userId) => {
	return {
		type: "LIKE_MEME",
		payload: {
			memeId: memeId,
			userId: userId
		}
	}
}

export const addComment= (memeId,userName,comment) => {
	alert(comment)
	return {
		type: "ADD_COMMENT",
		payload: {
			memeId: memeId,
			userName: userName,
			comment: comment,			
		}
	}
}

export const fetchApiMemes= () => {
	return (dispatch,getState) => {
		dispatch(getMemes())
	}
}