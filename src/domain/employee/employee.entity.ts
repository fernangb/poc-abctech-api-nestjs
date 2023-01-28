import { ServiceTypeEntity } from '../service-type/entities/service-type.entity';

export type EmployeeProps = {
  id?: number;
  name: string;
  service_types: ServiceTypeEntity[];
};

export class EmployeeEntity {
  private _id: number;
  private _name: string;
  private _service_types: ServiceTypeEntity[];

  constructor(props: EmployeeProps) {
    this._id = props.id;
    this._name = props.name;
    this._service_types = props.service_types;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get service_types() {
    return this._service_types;
  }
}
