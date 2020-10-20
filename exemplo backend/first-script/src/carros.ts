enum MARCAS_DE_CARROS {
   VOLKSWAGEN = "VOLKSWAGEN",
   FORD = "Ford",
   NISSAN = "Nissan",
   FERRARI = "Ferrari"
}

type carro = {
   marca: MARCAS_DE_CARROS,
   volumeDoTanque: number,
   temMotorFlex: boolean,
   calculaAutonomia: (combustivelRestante: number) => number
}

const mustang: carro = {
   marca: MARCAS_DE_CARROS.FORD,
   volumeDoTanque: 61,
   temMotorFlex: false,
   calculaAutonomia: function (combustivelRestante: number) {
      return 15 * combustivelRestante
   }
}

const gol: carro = {
   marca: MARCAS_DE_CARROS.VOLKSWAGEN,
   volumeDoTanque: 55,
   temMotorFlex: true,
   calculaAutonomia: function (combustivelRestante: number) {
      return 15 * combustivelRestante
   }
}

const kombi: carro = {
   marca: MARCAS_DE_CARROS.VOLKSWAGEN,
   volumeDoTanque: 45,
   temMotorFlex: false,
   calculaAutonomia: function (combustivelRestante: number) {
      return 15 * combustivelRestante
   }
}

const frota: Array<carro> = [mustang, gol, kombi]

function buscarCarrosPorMarca(frota: carro[], marca?: string): carro[] {
   if (marca === undefined) {
      return frota
   }

   return frota.filter(
      (carro: carro) => {
         return carro.marca === marca
      }
   )
}

console.log(buscarCarrosPorMarca(frota))
console.log(kombi.calculaAutonomia(39))
