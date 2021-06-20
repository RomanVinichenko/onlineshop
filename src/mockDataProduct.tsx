import { v1 } from 'uuid';

export type MockDataProductType = {
    id: string;
    img: string;
    title: string;
    type: string;
    description: DescriptionType;
    price: string;
    sale: string;
    newPrice: string;
    category?: JSX.Element;
};

type DescriptionType = {
    text: JSX.Element;
};

let mockDataProduct: MockDataProductType[] = [
    {
        id: v1(),
        img: '1.1.jpg',
        title: 'Название 1',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.2.jpg',
        title: 'Название 2',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.3.jpg',
        title: 'Название 3',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.4.jpg',
        title: 'Название 4',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.5.jpg',
        title: 'Название 5',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.6.jpg',
        title: 'Название 6',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.7.jpg',
        title: 'Название 7',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.8.jpg',
        title: 'Название 8',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.9.jpg',
        title: 'Название 9',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.10.jpg',
        title: 'Название 10',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.11.jpg',
        title: 'Название 11',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.12.jpg',
        title: 'Название 12',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.13.jpg',
        title: 'Название 13',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.14.jpg',
        title: 'Название 14',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.15.jpg',
        title: 'Название 15',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.16.jpg',
        title: 'Название 16',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.17.jpg',
        title: 'Название 17',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.18.jpg',
        title: 'Название 18',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.19.jpg',
        title: 'Название 19',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.20.jpg',
        title: 'Название 20',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.21.jpg',
        title: 'Название 21',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.22.jpg',
        title: 'Название 22',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.23.jpg',
        title: 'Название 23',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.24.jpg',
        title: 'Название 24',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '1.25.jpg',
        title: 'Название 25',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: '2.1.jpg',
        title: 'Название 26',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.2.jpg',
        title: 'Название 27',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.3.jpg',
        title: 'Название 28',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.4.jpg',
        title: 'Название 29',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.5.jpg',
        title: 'Название 30',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.6.jpg',
        title: 'Название 31',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.7.jpg',
        title: 'Название 32',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.8.jpg',
        title: 'Название 33',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.9.jpg',
        title: 'Название 34',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.10.jpg',
        title: 'Название 35',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.11.jpg',
        title: 'Название 36',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.12.jpg',
        title: 'Название 37',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.13.jpg',
        title: 'Название 38',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.14.jpg',
        title: 'Название 39',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.15.jpg',
        title: 'Название 40',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.16.jpg',
        title: 'Название 41',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.17.jpg',
        title: 'Название 42',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.18.jpg',
        title: 'Название 43',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.19.jpg',
        title: 'Название 44',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.20.jpg',
        title: 'Название 45',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.21.jpg',
        title: 'Название 46',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.22.jpg',
        title: 'Название 47',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.23.jpg',
        title: 'Название 48',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.24.jpg',
        title: 'Название 49',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.25.jpg',
        title: 'Название 50',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.26.jpg',
        title: 'Название 51',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.27.jpg',
        title: 'Название 52',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.28.jpg',
        title: 'Название 53',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.29.jpg',
        title: 'Название 54',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.30.jpg',
        title: 'Название 55',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.31.jpg',
        title: 'Название 56',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.32.jpg',
        title: 'Название 57',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.33.jpg',
        title: 'Название 58',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.34.jpg',
        title: 'Название 59',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.35.jpg',
        title: 'Название 60',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.36.jpg',
        title: 'Название 61',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.37.jpg',
        title: 'Название 62',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.38.jpg',
        title: 'Название 63',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.39.jpg',
        title: 'Название 64',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.40.jpg',
        title: 'Название 65',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.41.jpg',
        title: 'Название 66',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.42.jpg',
        title: 'Название 67',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.43.jpg',
        title: 'Название 68',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.44.jpg',
        title: 'Название 69',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.45.jpg',
        title: 'Название 70',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.46.jpg',
        title: 'Название 71',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.47.jpg',
        title: 'Название 72',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.48.jpg',
        title: 'Название 73',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.49.jpg',
        title: 'Название 74',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.50.jpg',
        title: 'Название 75',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.51.jpg',
        title: 'Название 76',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.52.jpg',
        title: 'Название 77',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.53.jpg',
        title: 'Название 78',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.54.jpg',
        title: 'Название 79',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.55.jpg',
        title: 'Название 80',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.56.jpg',
        title: 'Название 81',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.57.jpg',
        title: 'Название 82',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.58.jpg',
        title: 'Название 83',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.59.jpg',
        title: 'Название 84',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.60.jpg',
        title: 'Название 85',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.61.jpg',
        title: 'Название 86',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.62.jpg',
        title: 'Название 87',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.63.jpg',
        title: 'Название 88',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.64.jpg',
        title: 'Название 89',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.65.jpg',
        title: 'Название 90',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.66.jpg',
        title: 'Название 91',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.67.jpg',
        title: 'Название 92',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.68.jpg',
        title: 'Название 93',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.69.jpg',
        title: 'Название 94',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.70.jpg',
        title: 'Название 95',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.71.jpg',
        title: 'Название 96',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.72.jpg',
        title: 'Название 97',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.73.jpg',
        title: 'Название 98',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.74.jpg',
        title: 'Название 99',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.75.jpg',
        title: 'Название 100',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: '2.76.jpg',
        title: 'Название 101',
        type: 'linens',
        category: (
            <>
                <p>1,5-спальный</p>
                <p>2-спальный</p>
                <p>евро</p>
                <p>Семейный</p>
            </>
        ),
        description: {
            text: <p>Хлопок, полиэстер</p>,
        },
        price: '450 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
];

export default mockDataProduct;
