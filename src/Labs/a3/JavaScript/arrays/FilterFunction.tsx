let numberArray1 = [1, 2, 4, 5, 6];
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

function FilterFunction() {
    return (
        <>
        <h3>Filter Function</h3>
        numbersGreaterThan2 = {numbersGreaterThan2} <br />
        evenNumbers = {evenNumbers}
        oddNumbers = {oddNumbers}
        </>
    )
}

export default FilterFunction