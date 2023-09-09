// Constantes guardado, mediante el document.querySelector
const peso= document.querySelector('#peso');
const talla= document.querySelector('#talla');
const formu= document.querySelector('#formu');
const resultado= document.querySelector('#resultado');
const btn=document.querySelector('#btn');
const estado=document.querySelector('#estado');
const rangosaludable=document.querySelector('#rangosaludable');

const a = 18.5; b= 24.29; c=25; d = 29.9; e =30; f= 34.5; g=35;h=39.9 ; i =40;

btn.addEventListener('click', calcularImc);

function calcularImc(event){
    event.preventDefault(); // Para no refrescar la pagina con el ultimo input , ya que el form lo considera como un tipo submit por defecto en caso no lo tuviera predefinido 
    
    let imc= peso.value / (talla.value * talla.value); // para calcular el imc (formula)

    if(imc<a){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2)/*Para poner dos decimales hacia arriba */ + ' por lo tanto tiene bajo peso'
        
        estado.innerHTML='La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable.' 

        rangosaludable.innerHTML='Su rango de peso saludable es:' + (19)*talla.value*talla.value + ' - '


    }
    else if(imc>=a && imc<=b){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2) + ' por lo tanto tiene un peso saludable'
        
        estado.innerHTML='El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría.'

        rangosaludable.innerHTML='Su rango de peso saludable es: '+ tallacuadrada;
    }
    else if(imc>=c && imc<=d){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2) + ' por lo tanto tiene sobrepeso'
        
        estado.innerHTML='Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro.'
    }
    else if(imc>=e && imc<=f){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2) + ' por lo tanto tiene obesidad grado I'

        estado.innerHTML='Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.'
    }
    else if(imc>=g && imc<=h){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2) + ' por lo tanto tiene obesidad grado II'

        estado.innerHTML='Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.'
    }
    else if(imc>=i){
        resultado.innerHTML='Usted tiene un imc de : '+imc.toFixed(2) + ' por lo tanto tiene obesidad grado III'

        estado.innerHTML='Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.'
    }
    else{
        resultado.innerHTML='Ingrese correctamente los datos'
    }
   


}