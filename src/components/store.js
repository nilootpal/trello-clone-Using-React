export function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('task', serializedState)

    }catch(e){
        console.log(e);
    }
}
 
export function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('task')
        if (serializedState === null) return {};
        return JSON.parse(serializedState);
    }catch(e){
        console.log(e);
        return undefined
    }
}