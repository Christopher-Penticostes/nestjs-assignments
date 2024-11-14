import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/fibonacci')
export class FibonacciController {

    @Get(':number')
    fibonacci(@Param('number') number : string) : any {
        const num = parseInt(number);
        let num1 = 0;
        let num2 = 1;

        let sequence = [];

        for (let i = 1; i <= num; i++) {
            sequence.push(num1);
            const next = num1 + num2;
            num1 = num2;
            num2 = next;
        }

        return { sequence };
    }
}
