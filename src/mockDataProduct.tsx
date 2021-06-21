import { v1 } from 'uuid';

export type MockDataProductType = {
    id: string;
    img: string;
    title: string;
    type: string;
    description: DescriptionType;
    price: string;
    sale?: boolean | any;
    newPrice: string;
    category?: CategoryType[] | any;
};

type DescriptionType = {
    text: JSX.Element;
};

type CategoryType = {
    id: string;
    descr: string;
    count: number;
};

let mockDataProduct: MockDataProductType[] = [
    {
        id: v1(),
        img: 'towel/1.jpg',
        title: 'Полотенце махровое 100% хлопок',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/2.jpg',
        title: 'Название 2',
        type: 'towel',
        category: [
            { id: v1(), descr: '50x90(для рук)', count: 95 },
            { id: v1(), descr: '70x140(для тела)', count: 190 },
        ],
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: true,
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/3.jpg',
        title: 'Название 3',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/4.jpg',
        title: 'Название 4',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/5.jpg',
        title: 'Название 5',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/6.jpg',
        title: 'Название 6',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/7.jpg',
        title: 'Название 7',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/8.jpg',
        title: 'Название 8',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/9.jpg',
        title: 'Название 9',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/10.jpg',
        title: 'Название 10',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/11.jpg',
        title: 'Название 11',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/12.jpg',
        title: 'Название 12',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/13.jpg',
        title: 'Название 13',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/14.jpg',
        title: 'Название 14',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/15.jpg',
        title: 'Название 15',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/16.jpg',
        title: 'Название 16',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/17.jpg',
        title: 'Название 17',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/18.jpg',
        title: 'Название 18',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/19.jpg',
        title: 'Название 19',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/20.jpg',
        title: 'Название 20',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/21.jpg',
        title: 'Название 21',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '136 грн',
        sale: '25%',
        newPrice: '100 грн',
    },
    {
        id: v1(),
        img: 'towel/22.jpg',
        title: 'Название 22',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/23.jpg',
        title: 'Название 23',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/24.jpg',
        title: 'Название 24',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 400 г/м2), махровое</p>,
        },
        price: '95 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'towel/25.jpg',
        title: 'Название 25',
        type: 'towel',
        description: {
            text: <p>полотенце из 100% хлопка (махра, плотность: 450 г/м2), махровое</p>,
        },
        price: '220грн',
        sale: '25%',
        newPrice: '165 грн',
    },

    {
        id: v1(),
        img: 'linens/1.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/2.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/3.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/4.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/5.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/6.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/7.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/8.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/9.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/10.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/11.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/12.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/13.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/14.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/15.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/16.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/17.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/18.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/19.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/20.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/21.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/22.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/23.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/24.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/25.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/26.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/27.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/28.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/29.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/30.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/31.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/32.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/33.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/34.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/35.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/36.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/37.jpg',
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
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/38.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/39.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/40.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/41.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/42.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/43.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/44.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/45.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/46.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/47.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/48.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/49.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/50.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/51.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/52.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/53.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/54.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/55.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/56.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/57.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/58.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/59.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/60.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/61.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/62.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/63.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/64.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/65.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/66.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/67.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/68.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/69.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/70.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/71.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/72.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/73.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/74.jpg',
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
        price: '620 грн',
        sale: '25%',
        newPrice: '465 грн',
    },
    {
        id: v1(),
        img: 'linens/75.jpg',
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
        price: '1200 грн',
        sale: '25%',
        newPrice: '',
    },
    {
        id: v1(),
        img: 'linens/76.jpg',
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
        price: '1200 грн',
        sale: '25%',
        newPrice: '',
    },
];

export default mockDataProduct;
