
import {Share} from 'react-native';


export const _clearMask = (tmp) => {

    if(!tmp)return '';
    
    tmp = tmp.toString();   

    if(tmp.startsWith(0)){
       tmp = tmp.slice(1);
    }
    
    tmp = tmp.split(',').join('');
    tmp = tmp.split('.').join('');

    if(tmp == '')
        return tmp;
    else 
    {
        let valor = _.parseInt(tmp)
        return valor * 0.01;
    }
}
// export const phoneMask = (value) => {
//     let tel = value+'';
   
//     let x = '';
//     if (tel.length < 11) {
//         x = tel.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
//     } else {
//         x = tel.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
//     }
//     tel = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//     return tel
// };
export const CNPJMask = (value) => {
    let cnpj = value;
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
}
export const mCPF = (value) => {
    let cpf = value;
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}

export const phoneMask = (value) => {
    let tel = value;
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}
export const _realMask = ( value ) =>{

    if(!value)return '';

let tmp = value+'';
tmp = tmp.toString().split(',').join('');
tmp = tmp.toString().split('.').join('');

if(tmp.length < 6 ){
    if(tmp.length < 2){
       return tmp = tmp.replace(/([0-9]{1})$/g, "0,0$1");
       
    }
    else if(tmp.length < 3){
        return tmp = tmp.replace(/([0-9]{2})$/g, "0,$1");       
    }
    else{
        if(tmp.startsWith(0)){
            tmp = tmp.slice(1);
        }
        return tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    }
} else {
    if( tmp.length >= 6 && tmp.length <= 8){
        if(tmp.startsWith(0)){
            tmp = tmp.slice(1);
        }
        return  tmp = tmp.replace(/([0-9]{3})([0-9]{2}$)/g, ".$1,$2");
    }
    else{
        if(tmp.startsWith(0)){
            tmp = tmp.slice(1);
        }
        return tmp = tmp.replace(/([0-9]{3})([0-9]{3})([0-9]{2})$/g, ".$1.$2,$3");
    }
    
}
}
// {
//     let tmp = value+'';
//     if (tmp.length > 14 ) return;
    
//     tmp = tmp.toString().split(',').join('');
//     tmp = tmp.toString().split('.').join('');

//     if(tmp.length < 6 ){
//         if(tmp.length < 2)
//             tmp = tmp.replace(/([0-9]{1})$/g, "0,0$1");
//         else if(tmp.length < 3)
//             tmp = tmp.replace(/([0-9]{2})$/g, "0,$1");
//         else
//             tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
//     } else {
//         if( tmp.length >= 6 && tmp.length <= 8)
//             tmp = tmp.replace(/([0-9]{3})([0-9]{2}$)/g, ".$1,$2");
//         else
//             tmp = tmp.replace(/([0-9]{3})([0-9]{3})([0-9]{2})$/g, ".$1.$2,$3");
        
//     }

    
    
//     if(tmp === '0,00')
//         return '';
//     else 
//         return tmp;
   
// }


export const _openCameraJustOne = (modificaCampo, type, field) => {
    ImagePicker.showImagePicker({...options,  multiple: false,}, (response) => {
      
        if (response.didCancel) {   console.log("erro")}
        else if (response.error) { console.log('ImagePicker Error: ', response.error); }
        else if (response.customButton) {

            ImageCropPicker.openPicker(options).then(image => {
                
               modificaCampo(image.path, type, field);
               modificaCampo(image.data, type, field);

               return;
                
                });
            }
        else {
            ImageCropPicker.openCropper({
                ...optionsCrop,
                path: response.uri,
            }).then(image => {
                
                modificaCampo(image.path, type, field);
                modificaCampo(image.data, type, field);
 
                return;
                 
            });
    
        }
    });
};

export function dateToday(){
    let data = new Date();
    let day = ("0" + data.getDate()).slice(-2);
    let month = ("0" + (data.getMonth() + 1)).slice(-2);
    let year = data.getFullYear();
    let formattedDate = (year+"-"+month+"-"+day);
    
    if(moment().format('HH:mm') > '18:00'){
        formattedDate = moment().add(1, 'days').format('YYYY-MM-DD');
    } 


    console.log(formattedDate);
    return formattedDate;
}

export function tomorrow(){
    let data = new Date();
    let nextDay = ("0" + (data.getDate() + 1)).slice(-2)
    let month = ("0" + (data.getMonth() + 1)).slice(-2);
    let year = data.getFullYear();
    let formattedDate = (year+"-"+month+"-"+nextDay);

    if(moment().format('HH:mm') > '18:00'){
        formattedDate = moment().add(2, 'days').format('YYYY-MM-DD');
    }

    return formattedDate;
}

export const shareMessage = async (url) => {
    try {
        const result = await Share.share({
            message: url,
        });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.warn("compartilhado com o tipo de atividade de: " + result.activityType);
        } else {
          console.warn("compartilhado");
        }
      } else if (result.action === Share.dismissedAction) {
        console.warn("descartado");
      }
    } catch (error) {
      global.alerta.alert(error.message);
    }
  };

export function diferenceBetweenTwoDates(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    let diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    return diff;
}

export function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
        
    return str.replace( /(<([^>]+)>)/ig, '\n');
}
