import * as types from '../constants/ActionTypes'
// import { API_ROOT, HEADERS } from '../constants/ActionTypes'

export const setSuns = (suns) => {
  return {
    type: types.SET_SUNS,
    payload: suns
  }
}

export const setUsers = (users) => {
  return {
    type: types.SET_USERS,
    payload: users
  }
}

export const getEmailAndPW = (email, password) => {
  return {
    type: types.GET_EMAIL_AND_PW,
    payload: email, password
  }
}

export const setCurrentUser = (currentUser) => {
  return {
    type: types.SET_CURRENT_USER,
    payload: currentUser
  }
}

export const currentUserId = (userId) => {
  return {
    type: types.CURRENT_USER_ID,
    payload: userId
  }
}

export const setUserId = (userId) => {
  return {
    type: types.SET_USER_ID,
    payload: userId
  }
}

export const editUserDetails = (currentUser) => {
  return {
    type: types.EDIT_USER_DETAILS,
    payload: currentUser
  }
}

export const deleteUser = (currentUser) => {
  return {
    type: types.DELETE_USER,
    payload: currentUser
  }
}

export const findMatches = (matches) => {
  return {
    type: types.FIND_MATCHES,
    payload: matches
  }
}

export const findMatchedUsers = (matchedUsers) => {
  return {
    type: types.FIND_MATCHED_USERS,
    payload: matchedUsers
  }
}

export const allUndeclinedMatches = (undeclinedMatches) => {
  return {
    type: types.ALL_UNDECLINED_MATCHES,
    payload: undeclinedMatches
  }
}

export const allUndeclinedMatchedUsers = (undeclinedMatchedUsers) => {
  return {
    type: types.ALL_UNDECLINED_MATCHED_USERS,
    payload: undeclinedMatchedUsers
  }
}

export const findAccepted = (accepted) => {
  return {
    type: types.FIND_ACCEPTED,
    payload: accepted
  }
}

export const findAcceptedUsers = (acceptedUsers) => {
  return {
    type: types.FIND_ACCEPTED_USERS,
    payload: acceptedUsers
  }
}

export const viewMatch = (viewedMatch) => {
  return {
    type: types.VIEW_MATCH,
    payload: viewedMatch
  }
}

export const acceptMatch = (acceptedMatch) => {
  return {
    type: types.ACCEPT_MATCH,
    payload: acceptedMatch,
     // matches
    // (add to pending, should remove from matches [hit crud C for pending, D for matches, patch for json])
  }
}

export const acceptMatchedUser = (acceptedUser) => {
  return {
    type: types.ACCEPT_MATCHED_USER,
    payload: acceptedUser,
     // matches
    // (add to pending, should remove from matches [hit crud C for pending, D for matches, patch for json])
  }
}

export const declineMatch = (declinedMatch) => {
  return {
    type: types.DECLINE_MATCH,
    payload: declinedMatch
  }
}

export const declineMatchedUser = (declinedUser) => {
  return {
    type: types.DECLINE_MATCHED_USER,
    payload: declinedUser
  }
}

export const declinePendingMatch = (declinedMatch) => {
  return {
    type: types.DECLINE_PENDING_MATCH,
    payload: declinedMatch
  }
}

export const declinePendingMatchedUser = (declinedUser) => {
  return {
    type: types.DECLINE_PENDING_MATCHED_USER,
    payload: declinedUser
  }
}

export const updateMatchedUsers = (updatedMatchedUsers) => {
  return {
    type: types.UPDATE_MATCHED_USERS,
    payload: updatedMatchedUsers
  }
}

export const updateMatches = (updatedMatches) => {
  return {
    type: types.UPDATE_MATCHES,
    payload: updatedMatches
  }
}

export const enableChat = (chat) => {
  return {
    type: types.ENABLE_CHAT,
    payload: {
      chatEnabled: chat
    }
  }
}

export const getChats = (chats) => {
  console.log("getChats in actions/index 'chats' ", chats)
  return {
    type: types.GET_CHATS,
    payload: chats
    //get all a user's current convos
  }
}

// export const thunkSaveChats = () => {
export const saveChats = () => {
  // console.log("saveConvos in matchReducer 'chats' ", chats)
    return (dispatch) => {
      fetch(`${types.API_ROOT}/chats`, {
        method: 'GET',
        headers: types.HEADERS,
    })
    .then(r => r.json())
    .then(response => dispatch(
      {
        type: types.SAVE_CHATS,
        payload: {
        chats: response,
        }
      }
    ))
    // .catch(() => {
    //     dispatch( {
    //       type: ADD_ERROR_MESSAGE,
    //       payload: {
    //           key: "unauthorizedToken",
    //           value: "Unauthorized credentials. Please, log in again.",
    //       }
    //   })
    //   AdapterUser.deleteToken();
    //   return dispatch( {
    //   type: LOGOUT,
    // })})
  }
}

export const setReceiverId = (receiverId) => {
  console.log("setReceiverId in actions/index 'receiverId'", receiverId)
  return {
    type: types.SET_RECEIVER_ID,
    payload: receiverId
  }
}

export const addNewChat = (appendedChat) => {
  console.log("getConvos in actions/index 'appendedChat' ", appendedChat)
  return {
    type: types.ADD_NEW_CHAT,
    // payload: newChat
    payload: {
      appendedChat: appendedChat,
    }
    //get all a user's current convos
  }
}

export const saveCurrentChat = (currentChat) => {
  console.log("saveCurrentChat in actions/index 'currentChat' ", currentChat)
  return {
    type: types.SAVE_CURRENT_CHAT,
    // payload: currentChat
    payload: {
      currentChat: currentChat
    }
    //get all a user's current convos
  }
}

export const eraseCurrentChat = () => {
  console.log("eraseCurrentChat in actions/index 'currentChat' ")
  return {
    type: types.ERASE_CURRENT_CHAT,
    // payload: currentChat
    //get all a user's current convos
  }
}
