import { Component } from "./Component";
import { IsNumber, IsDefined } from 'class-validator';

export class Resistor extends Component{
    @IsDefined()
    @IsNumber()
    tolerance: number;
    @IsDefined()
    @IsNumber()
    stability: number;
    @IsDefined()
    @IsNumber()
    reliability: number;
    @IsDefined()
    @IsNumber()
    voltage_coefficient: number;
    @IsDefined()
    @IsNumber()
    noise: number;
    @IsDefined()
    @IsNumber()
    temperature_rating: number;
    @IsDefined()
    @IsNumber()
    thermal_resistance: number;
    @IsDefined()
    @IsNumber()
    temperature_coefficient_of_resistance: number;
}