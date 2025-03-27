/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

//importamos los módulos a utilizar
import dayjs from "dayjs";
import { es }  from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

+( function() {
  const university = "UOC";
  const fechado =  dayjs(new Date());
  console.log(`Hello, ${university}!`);
  console.log(`Fecha correpondiente a hoy = ${fechado}`); //muestra en consola la fecha en formato estándar
} )();

/* función que muestre la hora en formato digital y la fecha actual */
function mostrar_fecha_hora(){
  let today=new Date(); //creamos variable tipo Date()
  dayjs(today); //asociamos variable 'today'
  //configuramos fecha y hora a nuestro huso horario
  dayjs.locale("es");
  dayjs.extend(localeData);
  dayjs.weekdays();
  dayjs.months();
  //configuramos variables con el formato correspondiente a fecha y hora
  let salida_fecha=dayjs().format('[Hoy es] dddd, D [de] MMMM [de] YYYY (DD/MM/YYYY)'); //formato fecha personalizado
  let salida_hora=dayjs().format('HH:mm:ss'); //formato hora estándar
  //escribimos variables en elemento HTML
  document.getElementById('fecha').innerHTML=salida_fecha; 
  document.getElementById('reloj').innerHTML=salida_hora;
  setInterval(mostrar_fecha_hora, 1000); //añadimos intervalo de 1 Seg. para contador de horas
}//de función
mostrar_fecha_hora(); //llamada a función
