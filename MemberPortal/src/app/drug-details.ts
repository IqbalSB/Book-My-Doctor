export class DrugDetails {
  public drugId!: string;
  public name!: string;
  public manufacturer!: string;
  public manufacturedDate!: Date;
  public expiryDate!: Date;
  public location!: string;
  constructor(
    drugId: string,
    drugName: string,
    manufacturer: string,
    manufactureDate: Date,
    expiryDate: Date,
    location:String
  ) {}
}
