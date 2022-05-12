import { ComponentDto } from "./ComponentDto";
export declare class CapacitorDto extends ComponentDto {
    nominal_capacitance: number;
    working_voltage: number;
    tolerance: number;
    working_temperature: number;
    temperature_coefficient: number;
}
