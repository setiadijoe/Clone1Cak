const initialState = {
	memes: [{
		_id: '123',
		title: 'Goban',
		avatarUrl: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png',
		imageUrl: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/11930880_1651949391752070_47243331_n.jpg?ig_cache_key=MTA3NTAwNzc2NTUxODg2NTA4MQ%3D%3D.2',
		author: 'Ahmad',
		funny: []
	},
	{
		_id: '1234',
		title: 'Goban 2',
		avatarUrl: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png',
		imageUrl: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/11930880_1651949391752070_47243331_n.jpg?ig_cache_key=MTA3NTAwNzc2NTUxODg2NTA4MQ%3D%3D.2',
		author: 'Shahab',
		funny: []		
	}
	]
}
function memeReducer(state=initialState, action){
	console.log(state)
	switch(action.type) {
		case 'GET_MEMES':
			return state
		case 'LIKE_MEME':
			state.memes.forEach(meme => {
				if(meme._id === action.payload.memeId){
					if(meme.funny.indexOf(action.payload.userId) === -1){
						alert('liked')
						meme.funny.push(action.payload.userId)
					}else{
						alert('unliked')
						newMeme = meme.funny.filter( like => like != action.payload.userId)
						meme.funny = newMeme
					}
				}
			})
			return state			
		case 'UPLOAD_MEME':
			state.memes.push(action.payload)
			return state 		
		default:
			return state
	}
}

export default memeReducer