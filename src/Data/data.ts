import { faker } from "@faker-js/faker";
import { ITableProps } from "../helpers/types";

// Функция для генерации случайной даты
function getRandomDate(year: number, month: number, day: number): string {
    const startOfYear = new Date(year, month, day);
    const today = new Date();
    const timeDiff = today.getTime() - startOfYear.getTime();
    const randomTime = Math.floor(Math.random() * timeDiff);
    const randomDate = new Date(startOfYear.getTime() + randomTime);

    const randomDay = randomDate.getDate().toString().padStart(2, '0');
    const randomMonth = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const randomYear = randomDate.getFullYear().toString();

    return `${randomDay}.${randomMonth}.${randomYear}`;
}

// Генерация данных для таблицы
export const generateTableData = (count: number = 6): ITableProps[] => {
    const data: ITableProps[] = [];
    for (let i = 0; i < count; i++) {
        const Name = faker.person.fullName();
        const Email = faker.internet.email();
        const Status = Math.floor(Math.random() * 100);
        const Rnd_Int = Math.floor(Math.random() * 100);
        const Rnd_Date = getRandomDate(2024, 0, 1);
        data.push({ Name, Email, Status, Rnd_Int, Rnd_Date });
    }
    return data;
};

export const tableHead = ['Name', 'Email', 'Status', 'Rnd_Int', 'Rnd_Date'];
export const data = generateTableData();
