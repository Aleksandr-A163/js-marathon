function getRow(firstRow, secondRow) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === 'a'){
            count1++;
        }
    }

    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === 'a'){
            count2++;
        }
    }
if (count1 > count2) {
    alert(firstRow);
}
else alert (secondRow);

}

const firstRow = 'собака друг человека';
const secondRow = 'Мама мыла раму';

getRow(firstRow, secondRow);
