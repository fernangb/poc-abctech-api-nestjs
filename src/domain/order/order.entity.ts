import { CustomerEntity } from '../customer/entities/customer.entity';
import { EmployeeEntity } from '../employee/employee.entity';
import { ServiceTypeEntity } from '../service-type/entities/service-type.entity';

export type OrderProps = {
  id?: string;
  customer: CustomerEntity;
  employee: EmployeeEntity;
  service_types: ServiceTypeEntity[];
};

export class OrderEntity {
  private _id: string;
  private _customer: CustomerEntity;
  private _employee: EmployeeEntity;
  private _service_types: ServiceTypeEntity[];

  constructor(props: OrderProps) {
    this._id = props.id;
    this._customer = props.customer;
    this._employee = props.employee;
    this._service_types = props.service_types;

    this.validate();
  }

  validate() {
    if (this._service_types.length < 1 && this._service_types.length > 15)
      throw new Error('Invalid service types length');
  }

  get id() {
    return this._id;
  }

  get customer() {
    return this._customer;
  }

  get employee() {
    return this._employee;
  }

  get service_types() {
    return this._service_types;
  }
}
