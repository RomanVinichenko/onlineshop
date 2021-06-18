import { v1 } from 'uuid';

type MockDataProductType = {
    id: string;
    img: string;
    title: string;
    description: DescriptionType;
    price: string;
    sale: string;
};

type DescriptionType = {
    belong: string;
    structure: string;
    color: string;
    brand: string;
    made: string;
    weight: string;
    text: string;
    country: string; //плотность
    width: string;
};

export let mockDataProduct: MockDataProductType[] = [
    {
        id: v1(),
        img: 'path to assets/images',
        title: 'Name product',
        description: {
            belong: 'text',
            structure: 'text',
            color: 'text',
            brand: 'text',
            made: 'text',
            weight: 'text',
            text: 'text',
            country: 'text',
            width: 'text',
        },
        price: 'text',
        sale: 'string',
    },
];
