import maleAvatar from '../img/avatars/profil-male.jpeg';

export const getUser = ()=>{
    let user = {
        userId:0,
        username:'johndoe@mydomain.com',
        name:'John Doe',
        emailAddresses:'johndoe@mydomain.com',
        position:'secretary',
        avatar: maleAvatar,
        isSignedIn:true
    }
    return user;
}