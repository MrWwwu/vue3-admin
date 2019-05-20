export const saveInLocal = store =>{
  if(localStorage.state) store.replaceState(JSON.stringify(localStorage.state))

  store.subscribe((mutations,state)=>{
    localStorage.state = JSON.stringify(state)
  })
}
