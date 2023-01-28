export type CustomerProps = {
  id?: string;
  name: string;
  type: string;
};

export class CustomerEntity {
  private _id: string;
  private _name: string;
  private _type: string;

  constructor(props: CustomerProps) {
    this._id = props.id;
    this._name = props.name;
    this._type = props.type;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }
}
