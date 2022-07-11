export class RefillDue {
  public id!: number;
  public RefillDate!: Date;
  public DrugQuantity!: number;
  public RefillDelivered!: boolean;
  public Payment!: boolean;

  constructor(
    Id: number,
    RefillDate: Date,
    DrugQuantity: number,
    RefillDelivered: boolean,
    Payment: boolean
  ) {}
}
