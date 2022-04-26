type User = {
    fname?: string
    lname?: string
    username?: string
    email?: string
    password?: string
    mobile?: string
    address?: Address
}

type Address = {
    unit?: string
    complex?: string
    street?: string
    suburb?: string
    city?: string,
    district?: string
    province?: string
    country?: string
    zip_code?: string
}

type Product = {
    id?: string
    title?: string
    description?: string
    tags?: Array<string>
    cost?: number
    price?: number
    statistics?: Array<ProductStatistics>
}

type ProductStatistics = {
    date: Date,
    in_stock: Statistic
    sold: Statistic
}

type Statistic = {
    initial: number
    final?: number
    current: number
}