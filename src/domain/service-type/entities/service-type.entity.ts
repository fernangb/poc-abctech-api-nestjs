export type ServiceTypeProps = {
  id?: string;
  name: string;
};

export class ServiceTypeEntity {
  private _id: string;
  private _name: string;

  constructor(props: ServiceTypeProps) {
    this._id = props.id;
    this._name = props.name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}
