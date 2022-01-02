import { quantity } from './quantity_interface';

export var quantities : quantity[] = [
    {
        name : "Length",
        units : ['km','m','dm','cm','mm'],
        unitsMultiplier : [1000,1,0.1,0.01,0.001],

        currentUnitFrom : null,
        currentUnitTo : null,
        currentNumberFrom : null,
        result : null
    },
    {
        name : "Weight",
        units : ['t','kg','g','dg','cg','mg'],
        unitsMultiplier : [1000000,1000,1,0.1,0.01,0.001],

        currentUnitFrom : null,
        currentUnitTo : null,
        currentNumberFrom : null,
        result : null
    },
    {
        name : "Electric Current",
        units : ['GA','MA','kA','A','mA','µA','nA','abA','C/s','statA'],
        unitsMultiplier : [1000000000,1000000,1000,1,0.001,0.000001,0.000000001,0.1,1,299792453.68431],

        currentUnitFrom : null,
        currentUnitTo : null,
        currentNumberFrom : null,
        result : null
    },
    {
        name : "Speed",
        units : ['km/s','km/h','m/s','mph','mi/s'],
        unitsMultiplier : [1000,0.28,1,0.45,1609.34],

        currentUnitFrom : null,
        currentUnitTo : null,
        currentNumberFrom : null,
        result : null
    }
]
 