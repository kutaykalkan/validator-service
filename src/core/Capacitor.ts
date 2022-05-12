import { Component } from "./Component";
import { IsNumber, IsDefined } from 'class-validator';

export class Capacitor extends Component{
    @IsDefined()
    @IsNumber()
    nominal_capacitance: number;
    @IsDefined()
    @IsNumber()
    working_voltage: number;
    @IsDefined()
    @IsNumber()
    tolerance: number;
    @IsDefined()
    @IsNumber()
    working_temperature: number;
    @IsDefined()
    @IsNumber()
    temperature_coefficient: number;
}