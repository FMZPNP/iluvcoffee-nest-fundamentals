export class UpdateCoffeeDto {
    // we make all the properties optional to allow partial updates
    readonly name?: string;
    readonly brand?: string;
    readonly flavors?: string[];
}
