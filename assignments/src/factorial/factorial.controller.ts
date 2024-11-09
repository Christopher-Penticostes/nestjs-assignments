import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/factorial')
export class FactorialController {

    @Get(':number')
    factorial(@Param('number') number : string ) : any {
        let num = parseInt(number);
        let factorial = 1;
        if (num === 0) {
            factorial = 1;
        }
        for (let i = 2; i <= num; i++){
            factorial *= i;
        }
        return { factorial };
    }
}
