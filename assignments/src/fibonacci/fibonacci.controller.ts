import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get(':number')
    fibonacci(@Param('number') number : string) : any {
        const num = parseInt(number);
        let num1 = 0;
        let num2 = 1;

        const sequence = [num1];

        for (let i = 2; i <= num; i++) {
            const next = num1 + num2;
            sequence.push(next);
            num1 = num2;
            num2 = next;
        }

        return { sequence };
    }
}
