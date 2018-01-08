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
	return (dispatch,getState) => {
		let allMemes = getState().memeReducer.memes
		allMemes.push({
			title: titleMeme,
			avatarUrl: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png',
			imageUrl: imageUrlMeme,
			author: nameUser,
			funny: [],
			comment: []			
		})
		dispatch({
			type: "UPLOAD_MEME",
			payload: allMemes
		})
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
	return (dispatch,getState) => {
		let allMemes = getState().memeReducer.memes
		let newMemes = allMemes.map(meme => {
			if(meme._id == memeId){
				meme.comment.push({
					memeId:memeId,
					userName: userName,
					comment: comment
				})
			}
			return meme
		})
		dispatch({
			type: "ADD_COMMENT",
			payload: newMemes			
		})
	}
}

export const fetchApiMemes= () => {
	return (dispatch,getState) => {
		dispatch(getMemes())
	}
}