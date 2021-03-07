import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe('calculator.service', () => {

  let calc: CalculatorService, loggerSpy: any
  beforeEach(() => {
    console.log("calling before each");

    loggerSpy = jasmine.createSpyObj("LoggerService", ['log'])

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: loggerSpy
        }
      ]
    })


    calc = TestBed.inject(CalculatorService);
  })

  it('should add two numbers', () => {

    console.log("testing add");
    const result = calc.add(2, 2);


    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  })

  it('should add subsctruct numbers', () => {

    console.log("testing sub");

    const result = calc.subtract(2, 2);

    expect(result).toBe(0, "unexpected subscruction");

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })
})
