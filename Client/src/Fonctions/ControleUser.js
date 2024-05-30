export function ControleUser(user){
    
}
export function verifMail(email){
    let prefix=email.split("@")[1]
    let prefixes=["gmail.com", "yahoo.com", "hotmail.com", "hotmail.fr", "orange.fr", "live.com" ,"ymail.com" , "hotmail.it"];
    if (prefixes.includes(prefix)){
        return "green"
    }
    else return "red"
}
export function verifPassword(password) {
    let num = 0, Ucar = 0, car = 0, spec = 0, i = 0;
    while ((num * car * Ucar * spec === 0) && (i < password.length)) {
        let char = password.charCodeAt(i);
        if (char >= 97 && char <= 122) car++;
        else if (char >= 65 && char <= 90) Ucar++;
        else if (char >= 48 && char <= 57) num++;
        else spec++;
        i++;
    }
    if (num && car && spec && Ucar) {
        return "green"
    } else {
        return  "red"
    }
}

export function verifNumber(Num){
    if (Num <= 0 || !Number.isInteger(Num)) {
        return "red";
    }
    const F_Num=Num.toString()[0]
    if ((Num.toString()).length==8&&(F_Num==='2')||(F_Num==='5')||(F_Num==='9')||(F_Num==='4')){
        return "green"}
    else{
        return "red"
    }  
}
export function verifCIN(Num) {
    const F_Num = Num.toString()[0]

    // Vérifier si le numéro de CIN est supérieur à 9999999 et si le 8e chiffre est 0 ou 1
    if (((Num.toString()).length==7 && (F_Num === '0')) || ((F_Num === '1') && (Num.toString()).length==8) ){
        return "green";
    } else {
        return "red";
    }
}

export function verifName(Name){
    const regexAlphabet = /^[a-zA-Z]+$/;
    const result = regexAlphabet.test(Name);
    return result ? "green" : "red"
}
export function verifDate(Date){
    const result =Date.length===10
    return result ? "green" : "red"
}
