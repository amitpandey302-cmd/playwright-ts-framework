export{}

class Calculator{
    private result: number = 0;

    add(n:number): this {
        this.result += n;
        return this;
    }

    getResult(): number{
        return this.result;
    }
}

const calc = new Calculator();
console.log(calc.add(5).add(10).getResult());