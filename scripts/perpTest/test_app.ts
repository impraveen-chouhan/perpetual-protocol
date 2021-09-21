import { expect } from 'chai';
import main from '../ClearingHouseViewer_Testing';
import hello from '../hello';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Hello function', () => {
    console.log('test');
    it('should return hello world', () => {
        const result = hello();
        console.log(result);
        expect(result).to.equal('Hello World!');
    });
});

describe('Margin function', () => {
    it('should return string value', async () => {
        const result = main;
        console.log(result);
        expect(result).to.equal('Hello World!');
    });
});