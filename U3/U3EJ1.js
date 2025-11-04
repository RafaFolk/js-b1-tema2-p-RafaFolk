//T2: Clases / Classes
//U3: Propiedades / Propietats
/** 
  -- CASTELLANO
  -- EJERCICIO 2.3.1 ENUNCIADO: 
  Dada la definición de la clase "Car" que representará los coches de un concesionario (vista ya en el ejercicio 2.2.1 de este mismo Tema 2),
  se nos pide ampliar su definición de la siguiente forma:
  Por un lado, implementarle un setter (al que denominaremos carAntiguaty) que nos permita definir el valor de la propiedad "year"(año de fabricación)
   a partir de un parámetro recibido con información sobre los años de antigüedad del vehículo (podéis considerar directamente el año 2023 a efectos de cálculo).
  Por otro lado, implementarle un getter (al que denominaremos getCarDescription) que nos permita obtener la marca, modelo y cilidrada del vehículo directamente.
  
  	
  -- CATALÀ
  -- EXERCICI 2.3.1 ENUNCIAT:
  Donada la definició de la classe Car que representarà els cotxes d'un concessionari (vista ja a l'exercici 2.2.1 d'aquest mateix Tema 2),
  se'ns demana ampliar la seva definició de la manera següent:
  D'una banda, implementar-li un setter (que anomenarem carAntiguaty) que ens permeti definir el valor de la propietat "year" (any de fabricació)
   a partir d'un paràmetre rebut amb informació sobre els anys d'antiguitat del vehicle (podeu considerar directament l'any 2023 a efectes de càlcul).
  D'altra banda, implementar-li un getter (que anomenarem getCarDescription) que ens permeti obtenir la marca, model i cilidrada del vehicle directament.
*/
/**
* Do not uncomment this class, this is just informative to show the structure of the class
class Car {
  constructor(brand, model, displacement, horsePower, year) {
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.horsePower = horsePower;
    this.year = year;
  }
}
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Car {
  constructor(brand, model, displacement, horsePower, year) {
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.horsePower = horsePower;
    this.year = year;
  }

  set carAntiguaty(years){
    this.year=(2023-years);
  }

  get getCarDescription(){
    //en el enunciado no esta explicado lo del "cc", pero no pasa los test 
    //si no se añade
    return `${this.brand} ${this.model} ${this. displacement}cc`;
  }
}

const myCar1=new Car("Ford","Mustang Boss 429",7000,375,1969);
const myCar2=new Car("BMW","520d",1980,136,2002);
const myCar3=new Car("Mercedes-Benz","280 SLC",2746,136,1979);

//myCar1.carAntiguaty(50);  Me ha podido la constumbre de JAVA..., claramente se pone en
//                          los manuales que, en JS, getters y setters son propiedades y no metodos
myCar1.carAntiguaty=50;

console.log(myCar1);

//console.log(myCar2.getCarDescription()); lo mismo de antes
console.log(myCar2.getCarDescription);

//So far, so good ;




/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return Car;
}