type MockDataProductType = {
  img: string
  title: string
  description: DescriptionType
  price: number
  id: string
  sale: string
}

type DescriptionType = {
  belong: string
  structure: string
  color: string
  brand: string
  made: string
  weight: string
  text: string
  country: string //плотность
  width: string
}

export let mockDataProduct: MockDataProductType[] = []
