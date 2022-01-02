export interface quantity{
    
    name : string,
    units : string[],
    unitsMultiplier : number[],

    currentUnitFrom : string|null,
    currentUnitTo : string|null,
    currentNumberFrom : number|null,
    result : number|null
}