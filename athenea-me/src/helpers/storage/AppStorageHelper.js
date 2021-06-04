

export const loadFromLocalStorage = (valueName)=>{
    const value = localStorage.getItem(`${valueName}`);
    if(value !== null && value !== undefined && value!=="undefined"){
        return JSON.parse(value);
    }else{
        return undefined;
    }
}

export const saveToLocalStorage = (valueName, value)=>{
    const valueToStore = JSON.stringify(value);
    localStorage.setItem(`${valueName}`, valueToStore);
}

export const removeFromLocalStorage = (valueName)=>{
    localStorage.removeItem(`${valueName}`);
}


export const loadFromSessionStorage = (valueName)=>{
    const value = sessionStorage.getItem(`${valueName}`);
    if(value !== null && value !== undefined && value!=="undefined"){
        return JSON.parse(value);
    }else{
        return undefined;
    }
}

export const saveToSessionStorage = (valueName, value)=>{
    const valueToStore = JSON.stringify(value);
    sessionStorage.setItem(`${valueName}`, valueToStore);
}

export const removeFromSessionStorage = (valueName)=>{
    sessionStorage.removeItem(`${valueName}`);
}
