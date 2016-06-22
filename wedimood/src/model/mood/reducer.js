const initialState = {
  availableRatings:[
    { id: "angry", name: "angry", },
    { id: "sad", name: "sad", },
    { id: "bored", name: "bored", },
    { id: "fine", name: "fine", },
    { id: "happy", name: "happy", },
    { id: "awesome", name: "awesome", },
  ],
}

module.exports = (state = initialState, action) => {
  return initialState
}
