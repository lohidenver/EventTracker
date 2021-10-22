export class Migraine {
id: number;
intensity: number;
migraineStartDate: string;
migraineEndDate: string;
migraineTrigger: string;
typeOfTreatment: string;

constructor(
  id: number = 0,
  intensity: number = 0,
  migraineStartDate: string = '',
  migraineEndDate: string = '',
  migraineTrigger: string = '',
  typeOfTreatment: string = '',
  ) {
  this.id = id;
  this.intensity = intensity;
  this.migraineStartDate = migraineStartDate;
  this.migraineEndDate = migraineEndDate;
  this.migraineTrigger = migraineTrigger;
  this.typeOfTreatment = typeOfTreatment;
     }

}
