import { Component } from "./Component";
import { IsDefined, IsNumber } from 'class-validator';

export class Transistor extends Component{
    @IsDefined()
    @IsNumber()
    current_gain: number;
    @IsDefined()
    @IsNumber()
    collector_emittor_voltage: number;
    @IsDefined()
    @IsNumber()
    emitter_base_voltage: number;
    @IsDefined()
    @IsNumber()
    collector_current: number;
}