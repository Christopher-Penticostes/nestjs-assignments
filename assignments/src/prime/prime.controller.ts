import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/prime')
export class PrimeController {

    @Get(':number')
    prime(@Param('number') number : string) : any {
        let num = parseInt(number);
        let isPrime = true;
        if (num <= 1) {
            isPrime = true;
        }
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        return { isPrime };
    }
}
